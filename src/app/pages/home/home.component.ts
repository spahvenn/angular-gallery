import { Component } from '@angular/core';
import { CardListComponent } from './components/card-list/card-list.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SeasonCardsComponent } from './components/season-cards/season-cards.component';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardListComponent, CarouselComponent, SeasonCardsComponent, MatAnchor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
