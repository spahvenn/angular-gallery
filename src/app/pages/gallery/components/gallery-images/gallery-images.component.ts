import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Season } from '../../../../types/season.type';
import {
  STORE_ITEMS_AUTUMN,
  STORE_ITEMS_SPRING,
  STORE_ITEMS_SUMMER,
  STORE_ITEMS_WINTER,
  StoreItem,
} from '../../../../data/store-items';
import { CardComponent } from '../../../../components/card/card.component';

@Component({
  selector: 'app-gallery-images',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './gallery-images.component.html',
  styleUrl: './gallery-images.component.scss',
})
export class GalleryImagesComponent implements OnChanges {
  @Input() selectedSeason!: Season;
  selectedSeasonStoreItems: StoreItem[] = STORE_ITEMS_SUMMER;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedSeason']) {
      switch (this.selectedSeason) {
        case 'Spring':
          this.selectedSeasonStoreItems = STORE_ITEMS_SPRING;
          break;
        case 'Summer':
          this.selectedSeasonStoreItems = STORE_ITEMS_SUMMER;
          break;
        case 'Autumn':
          this.selectedSeasonStoreItems = STORE_ITEMS_AUTUMN;
          break;
        case 'Winter':
          this.selectedSeasonStoreItems = STORE_ITEMS_WINTER;
      }
    }
  }
}
