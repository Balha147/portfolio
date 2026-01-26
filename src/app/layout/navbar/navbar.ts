import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavIcon } from './nav-icon';
import { NAVBAR_CONFIG } from './navbar.config';
import { injectScrollSpy } from './scroll-spy';
import { Switch } from '../../shared/switch/switch';
import { Dock, DockItem } from './dock.directive';
import { ThemeService } from '../../core/theme.service';
import { injectScrollProgress } from './scroll-pregress';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  imports: [Switch, NavIcon, Dock, DockItem],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'closeMenu()' },
})
export class Navbar {
  private readonly themeService = inject(ThemeService);
  private readonly scroll = injectScrollProgress();

  readonly navItems = NAVBAR_CONFIG;
  readonly theme = this.themeService.theme;

  readonly scrolled = this.scroll.scrolled;
  readonly scrollProgress = this.scroll.progress;
  readonly activeId = injectScrollSpy(this.navItems.map(({ path }) => path.slice(1)));

  readonly menuOpen = signal(false);

  isActive(path: string): boolean {
    return path === '#' + this.activeId();
  }

  onToggleTheme(): void {
    this.themeService.toggle();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}