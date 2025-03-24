import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FadeInImgComponent} from '../../../../../../components/fade-in-img';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  imports: [
    NgOptimizedImage,
    FadeInImgComponent
  ],
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imgUrl!: string
}
