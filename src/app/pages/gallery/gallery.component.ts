import { Component } from '@angular/core';
import { PageContentContainerComponent } from '../../layout/page-content-container/page-content-container.component';
import { GalleryImagesComponent } from './components/gallery-images/gallery-images.component';
import { SeasonSelectorComponent } from './components/gallery-images/components/season-selector/season-selector.component';
import { Season } from '../../types/season.type';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PageContentContainerComponent, GalleryImagesComponent, SeasonSelectorComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  selectedSeason: Season = 'Summer';

  onSeasonChange(season: Season) {
    this.selectedSeason = season;
  }
}
