import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryImagesComponent } from './components/gallery-images/gallery-images.component';
import { SeasonSelectorComponent } from './components/gallery-images/components/season-selector/season-selector.component';
import { Season } from '../../types/season.type';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryImagesComponent, SeasonSelectorComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  selectedSeason: Season = 'All';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const season = this.route.snapshot.params['season'];
    if (season) {
      this.selectedSeason = season.charAt(0).toUpperCase() + season.slice(1);
    }
  }

  onSeasonChange(season: Season) {
    this.selectedSeason = season;
  }
}
