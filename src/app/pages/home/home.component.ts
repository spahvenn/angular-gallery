import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { PageContentContainerComponent } from '../../layout/page-content-container/page-content-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CardListComponent, PageContentContainerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
