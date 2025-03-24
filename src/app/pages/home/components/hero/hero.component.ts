import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FadeInImgComponent} from '../../../../components/fade-in-img';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    FadeInImgComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
