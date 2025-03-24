import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
