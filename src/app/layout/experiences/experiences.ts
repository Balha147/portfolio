import { Component } from '@angular/core';
import { Card } from '../../shared/card/card';
import { EXPERIENCES_CONFIG } from './experiences.config';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
  imports: [Card]
})
export class Experiences {

  experiencesConfig = EXPERIENCES_CONFIG;
}
