import { Component, HostListener, signal } from '@angular/core';
import { Card } from '../../shared/card/card';
import { EXPERIENCES_CONFIG } from './experiences.config';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
  imports: [Card]
})
export class Experiences {

  experiencesConfig = signal(EXPERIENCES_CONFIG);

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
