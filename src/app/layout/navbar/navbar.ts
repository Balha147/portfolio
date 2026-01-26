import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { Switch } from '../../shared/switch/switch';
import { NAVBAR_CONFIG } from './navbar.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  imports: [Switch]
})
export class Navbar {
  private readonly themeService = inject(ThemeService);

  theme = this.themeService.theme;

  scrolled = signal(false);

  menuOpen = signal(false);

  scrollProgress = signal(0);

  navItems = NAVBAR_CONFIG;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY;
    this.scrolled.set(scrollY > 20);

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPercent = height > 0 ? (winScroll / height) * 100 : 0;

    this.scrollProgress.set(Math.min(100, Math.max(0, scrolledPercent)));
  }

  onToggleTheme(): void {
    this.themeService.toggle();
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

}
