import { Component, computed, inject, LOCALE_ID, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { Switch } from '../../shared/switch/switch';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NAVBAR_CONFIG } from './navbar.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  imports: [Switch, FontAwesomeModule]
})
export class Navbar {
  private readonly themeService = inject(ThemeService);

  theme = this.themeService.theme;

  currentLang = computed(() => {
    const path = window.location.pathname.toLowerCase();
      if (path.includes('fr-fr') || path.includes('fr')) return 'FR';
      if (path.includes('en-us') || path.includes('en')) return 'EN';
      return 'FR';
  });

  languages = [
    { code: 'fr', label: 'FRANÇAIS' },
    { code: 'en', label: 'ENGLISH' }
  ];

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

  switchLanguage(lang: string) {
    const targetUrl = lang === 'fr' ? '/fr-FR/' : '/en-US/';

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        window.location.href = targetUrl;
      });
    } else {
      window.location.href = targetUrl;
    }
  }

}
