import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { Season } from '../../../../../../types/season.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-season-selector',
  standalone: true,
  imports: [MatRadioGroup, MatRadioButton, FormsModule],
  templateUrl: './season-selector.component.html',
  styleUrl: './season-selector.component.scss',
})
export class SeasonSelectorComponent {
  @Input() selectedSeason: Season = 'All';
  @Output() seasonChange = new EventEmitter<Season>();

  seasons: Season[] = ['All', 'Spring', 'Summer', 'Autumn', 'Winter'];

  constructor(private router: Router) {}

  onSeasonChange(season: Season) {
    this.seasonChange.emit(season);
    const path = season === 'All' ? '/gallery' : `/gallery/${season.toLowerCase()}`;
    this.router.navigate([path], { replaceUrl: true });
  }
}
