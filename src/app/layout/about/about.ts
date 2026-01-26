import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
})
export class About {

  readonly highlights = [
    { value: '7+', label: "Années d'expérience" },
    { value: 'Angular', label: 'Architecture & Signals' },
    { value: 'Fullstack', label: 'Vision Java / Spring' },
  ];

  readonly skills = [
    'Angular 17+',
    'TypeScript',
    'Signals / Signal Forms',
    'Design Systems',
    'Frontend Architecture',
    'Performance Web',
    'NgRx/SignalStore',
    'Java / Spring Boot',
    'RxJS',
    'Tailwind CSS',
    'Agentic UI'
  ];
}
