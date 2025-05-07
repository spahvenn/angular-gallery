import { Component } from '@angular/core';
import { CardListComponent } from './components/card-list/card-list.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SeasonCardsComponent } from './components/season-cards/season-cards.component';
import { MatAnchor, MatButton } from '@angular/material/button';
import { HeroCallToActionComponent } from './components/hero-call-to-action/hero-call-to-action.component';
import { PageContainerComponent } from '../../layout/page-container/page-container.component';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardListComponent,
    CarouselComponent,
    SeasonCardsComponent,
    MatAnchor,
    MatButton,
    HeroCallToActionComponent,
    PageContainerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private route: ActivatedRoute,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    const description = this.route.snapshot.data['meta']?.description;
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
  }
}
