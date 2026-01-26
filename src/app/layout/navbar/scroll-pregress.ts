import { DestroyRef, Signal, afterNextRender, inject, signal } from '@angular/core';

export interface ScrollState {
    scrolled: Signal<boolean>;
    progress: Signal<number>;
}

export function injectScrollProgress(threshold = 20): ScrollState {
    const destroyRef = inject(DestroyRef);
    const scrolled = signal(false);
    const progress = signal(0);

    afterNextRender(() => {
        const update = () => {
            const { scrollY } = window;
            const { scrollHeight, clientHeight } = document.documentElement;
            const max = scrollHeight - clientHeight;

            scrolled.set(scrollY > threshold);
            progress.set(max > 0 ? Math.min(100, Math.max(0, (scrollY / max) * 100)) : 0);
        };

        update();

        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update, { passive: true });
        destroyRef.onDestroy(() => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        });
    });

    return { scrolled: scrolled.asReadonly(), progress: progress.asReadonly() };
}