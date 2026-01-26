import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './layout/hero/hero';
import { Navbar } from './layout/navbar/navbar';
import { About } from './layout/about/about';
import { Experiences } from './layout/experiences/experiences';
import { Skills } from './layout/skills/skills';
import { Projects } from './layout/projects/projects';
import { Educations } from './layout/educations/educations';
import { Contact } from './layout/contact/contact';
import { Footer } from './layout/footer/footer';
import { ScrollToTop } from './shared/scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Hero,
    Navbar,
    About,
    Experiences,
    Skills,
    Projects,
    Educations,
    Contact,
    Footer,
    ScrollToTop,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
