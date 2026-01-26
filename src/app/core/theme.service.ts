import { signal, effect, inject, PLATFORM_ID, Service } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

const THEME_COLORS: Record<Theme, string> = { dark: '#0a0c10', light: '#f8f9fc' };

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
      const theme = this.theme();
      document.documentElement.setAttribute('data-theme', theme);
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
    });
  }

  private getInitialTheme(): Theme {
    if (!this.isBrowser) {
      return 'dark';
    }
    const applied = document.documentElement.getAttribute('data-theme');
    if (applied === 'light' || applied === 'dark') {
      return applied;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  toggle(): void {
    const next: Theme = this.theme() === 'light' ? 'dark' : 'light';
    const apply = () => {
      this.theme.set(next);
      if (this.isBrowser) {
        document.documentElement.setAttribute('data-theme', next);
      }
      this.remember(next);
    };

    if (!this.isBrowser || !document.startViewTransition) {
      apply();
      return;
    }
    document.startViewTransition(apply);
  }

  private remember(theme: Theme): void {
    if (!this.isBrowser) {
      return;
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {
      console.log('Theme storage failed');
    }
  }
}
