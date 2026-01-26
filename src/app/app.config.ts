import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners, provideEnvironmentInitializer, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { setupFontAwesome } from './fontawesome.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
       provideEnvironmentInitializer(() => {
        const library = inject(FaIconLibrary);
        setupFontAwesome(library);
      })
  ]
};
