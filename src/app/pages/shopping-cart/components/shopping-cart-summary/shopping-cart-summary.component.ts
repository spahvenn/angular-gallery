import { Component } from '@angular/core';
import { CartService } from '../../../../services/cart-service.service';
import { CheckoutButtonComponent } from './components/checkout-button/checkout-button.component';

@Component({
  selector: 'app-shopping-cart-summary',
  standalone: true,
  imports: [CheckoutButtonComponent],
  templateUrl: './shopping-cart-summary.component.html',
  styleUrl: './shopping-cart-summary.component.scss',
})
export class ShoppingCartSummaryComponent {
  protected cartItems: number[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cartItemIds => {
      this.cartItems = cartItemIds;
    });
  }
}
