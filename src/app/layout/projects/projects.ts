import { Component } from '@angular/core';
import { TerminalCmd } from '../../shared/terminal-cmd/terminal-cmd';
import { PROJECTS } from './project.config';

@Component({
  selector: 'app-projects',
  imports: [TerminalCmd],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = PROJECTS;
}
