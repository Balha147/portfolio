import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<Theme>(
    (localStorage.getItem('theme') as Theme) || 'light'
  );

  constructor() {
    effect(() => {
      document.documentElement.setAttribute('data-theme', this.theme());
      localStorage.setItem('theme', this.theme());
    });
  }

  toggle(): void {
    this.theme.update((t: Theme) => (t === 'light' ? 'dark' : 'light'));
  }
}
