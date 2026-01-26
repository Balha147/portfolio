import { Component, HostListener, signal } from '@angular/core';
@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.html',
})
export class ScrollToTop {
  readonly isVisible = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    this.isVisible.set(scrollPosition > 300);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
