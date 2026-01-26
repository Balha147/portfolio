import { Component } from '@angular/core';
import { EDUCATIONS_CONFIG } from './educations.config';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.html',
})
export class Educations {
  educationsConfig = EDUCATIONS_CONFIG;
}
