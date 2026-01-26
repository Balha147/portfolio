import { Directive, ElementRef, afterNextRender, computed, inject, input, signal } from '@angular/core';

@Directive({
    selector: '[appDock]',
    host: {
        '(pointerenter)': 'measure()',
        '(pointermove)': 'track($event)',
        '(pointerleave)': 'reset()',
    },
})
export class Dock {
    readonly maxScale = input(1.6);
    readonly radius = input(90);

    private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

    private readonly pointerX = signal<number | null>(null);
    private readonly centers = signal<number[]>([]);
    private readonly reducedMotion = signal(false);

    private readonly scales = computed<number[]>(() => {
        const x = this.pointerX();
        if (x === null || this.reducedMotion()) return [];

        const max = this.maxScale();
        const radius = this.radius();

        return this.centers().map((center) => {
            const distance = Math.abs(x - center);
            if (distance >= radius) return 1;

            const influence = (1 + Math.cos((Math.PI * distance) / radius)) / 2;
            return Math.round((1 + (max - 1) * influence) * 1000) / 1000;
        });
    });

    constructor() {
        afterNextRender(() =>
            this.reducedMotion.set(window.matchMedia('(prefers-reduced-motion: reduce)').matches),
        );
    }

    scaleAt(index: number): number {
        return this.scales()[index] ?? 1;
    }

    measure(): void {
        this.centers.set(
            Array.from(this.host.children, (child) => {
                const { left, width } = child.getBoundingClientRect();
                return left + width / 2;
            }),
        );
    }

    track(event: PointerEvent): void {
        if (event.pointerType === 'mouse') this.pointerX.set(event.clientX); // pas de magnification au doigt
    }

    reset(): void {
        this.pointerX.set(null);
    }
}

@Directive({
    selector: '[appDockItem]',
    host: { '[style.transform]': 'transform()' },
})
export class DockItem {
    private readonly dock = inject(Dock);

    readonly index = input.required<number>({ alias: 'appDockItem' });

    readonly transform = computed(() => `scale(${this.dock.scaleAt(this.index())})`);
}