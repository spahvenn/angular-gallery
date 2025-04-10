import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderShoppingCartComponent } from './components/header-shopping-cart/header-shopping-cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, HeaderShoppingCartComponent, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
