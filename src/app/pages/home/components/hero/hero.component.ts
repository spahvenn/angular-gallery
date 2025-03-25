import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FadeInDirective } from '../../../../directives/fade-in.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FadeInDirective
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
