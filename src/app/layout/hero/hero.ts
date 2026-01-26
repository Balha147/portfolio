import { Component } from '@angular/core';
import { TerminalCmd } from '../../shared/terminal-cmd/terminal-cmd';
import { Profil } from './profil/profil';

@Component({
  selector: 'app-hero',
  imports: [TerminalCmd, Profil],
  templateUrl: './hero.html',
})
export class Hero {
  text = `
const developer = {
        name: 'Mohamed Hedi Basly',
        role: '${$localize`:@@hero.dev.role:Senior Developer`}',
        skills: {
          frontend: ['Angular 17+', 'TS/JS', 'Signals', 'RxJS', 'NgRx', 'Accessibilité'],
          backend: ['NestJS', 'REST APIs', 'PostgreSQL', 'MongoDB'],
        },
        hardWorker: true,
        quickLearner: true,
        hireable() {
          return (
            this.hardWorker &&
            this.quickLearner &&
            this.skills.frontend.length >= 4
          );
        }
};`
}
