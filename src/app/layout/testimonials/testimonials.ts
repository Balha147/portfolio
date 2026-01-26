import { Component } from '@angular/core';
import { TESTIMONIALS_CONFIG } from './testimonials.config';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  testtimonialsConfig = TESTIMONIALS_CONFIG;
}
