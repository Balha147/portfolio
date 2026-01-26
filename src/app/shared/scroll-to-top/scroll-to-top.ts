import { Component, HostListener, input, signal } from '@angular/core';
import { fromEvent, throttleTime, map, distinctUntilChanged, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.scss',
})
export class ScrollToTop {
  threshold = input(300);

  private scroll$ = fromEvent(window, 'scroll').pipe(
    throttleTime(100),
    map(() => window.scrollY > this.threshold()),
    distinctUntilChanged(),
    startWith(false)
  );

  isVisible = toSignal(this.scroll$, { initialValue: false });

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
