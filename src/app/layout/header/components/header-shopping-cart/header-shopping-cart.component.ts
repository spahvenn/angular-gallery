import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../../../services/cart/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-shopping-cart',
  standalone: true,
  imports: [MatIcon, RouterLink, RouterLinkActive],
  templateUrl: './header-shopping-cart.component.html',
  styleUrl: './header-shopping-cart.component.scss',
})
export class HeaderShoppingCartComponent {
  cartItems: string[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }
}
