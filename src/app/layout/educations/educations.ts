import { Component } from '@angular/core';
import { Card } from '../../shared/card/card';
import { EDUCATIONS_CONFIG } from './educations.config';

@Component({
  selector: 'app-educations',
  imports: [Card],
  templateUrl: './educations.html',
  styleUrl: './educations.scss',
})
export class Educations {
  educationsConfig = EDUCATIONS_CONFIG;
}
