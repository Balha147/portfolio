import { signal, effect, inject, PLATFORM_ID, Service } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Service()
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    effect(() => {
      if (!this.isBrowser) {
        return;
      }
      document.documentElement.setAttribute('data-theme', this.theme());
      localStorage.setItem('theme', this.theme());
    });
  }

  private getInitialTheme(): Theme {
    if (!this.isBrowser) {
      return 'dark';
    }
    return (localStorage.getItem('theme') as Theme) || 'dark';
  }

  toggle(): void {
    if (!this.isBrowser || !document.startViewTransition) {
      this.theme.update((t: Theme) => (t === 'light' ? 'dark' : 'light'));
      return;
    }

    document.startViewTransition(() => {
      this.theme.update((t: Theme) => (t === 'light' ? 'dark' : 'light'));
    });
  }
}