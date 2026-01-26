import { Component } from '@angular/core';
import { PROJECTS } from './projects.config';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
})
export class Projects {
  readonly projects = PROJECTS;
}
