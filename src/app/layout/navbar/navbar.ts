import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { Switch } from '../../shared/switch/switch';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NAVBAR_CONFIG } from './navbar.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports: [Switch, FontAwesomeModule]
})
export class Navbar {
  private readonly themeService = inject(ThemeService);

  theme = this.themeService.theme;

  scrolled = signal(false);

  menuOpen = signal(false);

  navItems = NAVBAR_CONFIG;

  onToggleTheme(): void {
    this.themeService.toggle();
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }
}
