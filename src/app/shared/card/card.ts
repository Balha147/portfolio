import { Component, input } from '@angular/core';
import { CardModel } from './card.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  config = input.required<CardModel>();
}
