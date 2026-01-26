import {
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';

import { Announcer } from '../../core/annoncer.service';
import { SOCIAL_LINKS } from '../../shared/social-links';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly announcer = inject(Announcer);

  readonly email = 'baslymohamedhedi@gmail.com';
  readonly location = 'Clamart, Paris FR';
  readonly socialLinks = SOCIAL_LINKS;

  readonly copied = signal(false);

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);

      this.copied.set(true);

      this.announcer.announce('Adresse e-mail copiée dans le presse-papiers.');

      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      this.announcer.announce(
        "Copie impossible. Sélectionnez l'adresse e-mail manuellement."
      );
    }
  }
}