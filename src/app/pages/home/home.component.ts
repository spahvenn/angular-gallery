import { Component } from '@angular/core';
import { CardListComponent } from './components/card-list/card-list.component';
import { PageContentContainerComponent } from '../../layout/page-content-container/page-content-container.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardListComponent, PageContentContainerComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
