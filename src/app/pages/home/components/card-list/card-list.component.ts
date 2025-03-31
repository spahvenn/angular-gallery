import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { STORE_ITEMS_SUMMER } from '../../../../data/store-items';

@Component({
  selector: 'app-card-list',
  standalone: true,
  templateUrl: './card-list.component.html',
  imports: [CardComponent],
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  storeItems = STORE_ITEMS_SUMMER;
}
