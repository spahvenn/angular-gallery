import { Component } from '@angular/core';
import { SeasonCardComponent } from './components/season-card/season-card.component';

@Component({
  selector: 'app-season-cards',
  standalone: true,
  imports: [SeasonCardComponent],
  templateUrl: './season-cards.component.html',
  styleUrl: './season-cards.component.scss',
})
export class SeasonCardsComponent {}
