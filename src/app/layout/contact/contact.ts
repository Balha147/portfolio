import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule],
  templateUrl: './contact.html',
})
export class Contact {
  person = {
    email: 'baslymohamedhedi@gmail.com',
    tel: '+33 6 25 82 93 14',
    adress: 'Clamart, Paris FR',
    github: 'https://github.com/Balha147',
    linkedIn: 'https://www.linkedin.com/in/mohamed-hedi-basly/'
  }
}
