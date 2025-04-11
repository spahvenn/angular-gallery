import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
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
export class SeasonSelectorComponent implements AfterViewInit {
  @Input() selectedSeason: Season = 'All';
  @Output() seasonChange = new EventEmitter<Season>();
  @ViewChildren(MatRadioButton) radioButtons!: QueryList<MatRadioButton>;

  seasons: Season[] = ['All', 'Spring', 'Summer', 'Autumn', 'Winter'];

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Focus the selected radio button after view init
    // This fixes issue where keyboard navigation loses radio button focus
    const selectedRadio = this.radioButtons.find(radio => radio.value === this.selectedSeason);
    if (selectedRadio) {
      selectedRadio.focus();
    }
  }

  onSeasonChange(season: Season) {
    this.seasonChange.emit(season);
    const path = season === 'All' ? '/gallery' : `/gallery/${season.toLowerCase()}`;
    this.router.navigate([path], { replaceUrl: true });
  }
}
