import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../shared/social-links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();
  readonly socialLinks = SOCIAL_LINKS;
}
