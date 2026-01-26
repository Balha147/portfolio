import { Component } from '@angular/core';
import { SKILLS } from './skillls.config';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
})
export class Skills {
  skillsConfig = SKILLS;
}
