import { Component } from '@angular/core';
import {CardComponent} from './components/card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  templateUrl: './card-list.component.html',
  imports: [
    CardComponent
  ],
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  imageNumbers = Array.from({ length: 14 }, (_, i) => i + 1);
}
