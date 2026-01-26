import { Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SKILL_CONFIG } from './skills.config';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  imports: [NgOptimizedImage]
})
export class Skills {
  skills = signal(SKILL_CONFIG);

  private viewport = viewChild<ElementRef>('viewport');

  activeIndex = signal(0);
  isPaused = signal(false);

  constructor() {
    effect((onCleanup) => {
      if (this.isPaused()) return;

      const interval = setInterval(() => {
        this.next();
      }, 3000);

      onCleanup(() => clearInterval(interval));
    });
  }

  next() {
    this.activeIndex.update(idx => (idx + 1) % this.skills().length);
  }

  prev() {
    this.activeIndex.update(idx => (idx - 1 + this.skills().length) % this.skills().length);
  }

  getCardStyles(index: number) {
    const active = this.activeIndex();
    const total = this.skills().length;

    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);

    const isVisible = absDiff <= 2;

    const xTranslate = diff * 180;
    const zTranslate = absDiff * -150;
    const rotateY = diff * -30;
    const opacity = isVisible ? 1 - absDiff * 0.3 : 0;
    const scale = isVisible ? 1 - absDiff * 0.1 : 0.5;

    return {
      transform: `translateX(${xTranslate}px) translateZ(${zTranslate}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex: 100 - absDiff,
      opacity: opacity,
      pointerEvents: diff === 0 ? 'auto' : 'none'
    };
  }
}
