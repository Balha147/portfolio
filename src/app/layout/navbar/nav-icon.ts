import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-nav-icon',
    template: `
    <svg class="size-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="path()" />
    </svg>
  `,
    host: { class: 'block shrink-0' },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavIcon {
    readonly path = input.required<string>();
}