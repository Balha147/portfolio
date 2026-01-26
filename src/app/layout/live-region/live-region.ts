import { Component, inject } from '@angular/core';
import { Announcer } from '../../core/annoncer.service';

@Component({
  selector: 'app-live-region',
  template: `<div class="sr-only" role="status" aria-live="polite" aria-atomic="true">{{ announcer.message() }}</div>`,
})
export class LiveRegion {
  protected readonly announcer = inject(Announcer);
}
