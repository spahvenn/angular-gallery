import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../../../services/cart-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-shopping-cart',
  standalone: true,
  imports: [MatIcon, RouterLink],
  templateUrl: './header-shopping-cart.component.html',
  styleUrl: './header-shopping-cart.component.scss',
})
export class HeaderShoppingCartComponent {
  cartItems: number[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }
}
