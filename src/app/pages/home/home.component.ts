import { Component } from '@angular/core';
import { HeroComponent} from './components/hero/hero.component';
import {CardListComponent} from './components/card-list/card-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CardListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
