import { Component, } from '@angular/core';
import { ACTIVITIES } from './community.config';

@Component({
  selector: 'app-community',
  templateUrl: './community.html',
})
export class Community {

  readonly activitiesConfig = ACTIVITIES;

}
