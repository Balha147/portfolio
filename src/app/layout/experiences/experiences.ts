import { Component, HostListener } from '@angular/core';
import { EXPERIENCES_CONFIG } from './experiences.config';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-experiences',
  imports: [NgOptimizedImage],
  templateUrl: './experiences.html',
})
export class Experiences {

  readonly experiencesConfig = EXPERIENCES_CONFIG;

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const card = target.closest('.timeline-card') as HTMLElement;

    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  }
}
