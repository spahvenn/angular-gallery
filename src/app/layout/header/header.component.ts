import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderShoppingCartComponent } from './components/header-shopping-cart/header-shopping-cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, HeaderShoppingCartComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
