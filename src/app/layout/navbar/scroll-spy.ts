import { DestroyRef, Signal, afterNextRender, inject, signal } from '@angular/core';

export interface ScrollSpyOptions {
    tolerance?: number;
}

export function injectScrollSpy(
    ids: readonly string[],
    { tolerance = 16 }: ScrollSpyOptions = {},
): Signal<string> {
    const destroyRef = inject(DestroyRef);
    const activeId = signal('');

    afterNextRender(() => {
        let frame = 0;

        const compute = (): string => {
            const sections = ids.flatMap((id) => {
                const el = document.getElementById(id);
                return el ? [{ id, el }] : [];
            });
            if (sections.length === 0) return '';

            const { scrollY, innerHeight } = window;
            const atBottom = scrollY > 0 && scrollY + innerHeight >= document.documentElement.scrollHeight - 2;
            if (atBottom) return sections[sections.length - 1].id;

            let current = '';
            let currentTop = -Infinity;
            for (const { id, el } of sections) {
                const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
                const top = el.getBoundingClientRect().top - margin;

                if (top <= tolerance && top > currentTop) {
                    current = id;
                    currentTop = top;
                }
            }
            return current;
        };

        const schedule = () => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                frame = 0;
                activeId.set(compute());
            });
        };

        schedule();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule, { passive: true });

        destroyRef.onDestroy(() => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
        });
    });

    return activeId.asReadonly();
}