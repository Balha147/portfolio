import { Component, input, output } from '@angular/core';
import { Theme } from '../../core/theme.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.html',
})
export class Switch {

  theme = input.required<Theme>();

  themeChanged = output<void>();

  onToggle(): void {
    this.themeChanged.emit();
  }
}
