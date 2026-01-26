import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
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
