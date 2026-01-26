import { Component, signal } from '@angular/core';
import { Hero } from './layout/hero/hero';
import { Navbar } from './layout/navbar/navbar';
import { About } from './layout/about/about';
import { Experiences } from './layout/experiences/experiences';
import { Educations } from './layout/educations/educations';
import { Footer } from './layout/footer/footer';
import { ScrollToTop } from './shared/scroll-to-top/scroll-to-top';
import { Projects } from './projects/projects';
import { Community } from './community/community';
import { Skills } from './skills/skills';
import { Testimonials } from './testimonials/testimonials';

@Component({
  selector: 'app-root',
  imports: [
    Hero,
    Navbar,
    About,
    Experiences,
    Educations,
    Footer,
    ScrollToTop,
    Projects,
    Community,
    Skills,
    Testimonials
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('HEDI BASLY');
}
