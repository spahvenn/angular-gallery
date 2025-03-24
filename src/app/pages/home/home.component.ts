import { Component } from '@angular/core';
import { HeroComponent} from './components/hero/hero.component';
import {CardComponent} from './components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
