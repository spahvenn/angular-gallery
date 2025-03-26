import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { CartService } from '../../../../../../../../../../services/cart-service.service';

@Component({
  selector: 'app-shopping-cart-button',
  standalone: true,
  imports: [MatButton],
  templateUrl: './shopping-cart-button.component.html',
  styleUrl: './shopping-cart-button.component.scss',
})
export class ShoppingCartButtonComponent {
  // TODO: Change this to actual image in the dialog
  imageUrl = 'https://example.com/product-image.jpg';

  constructor(private cartService: CartService) {}

  addToCart() {
    console.log('added to cart');
    this.cartService.addToCart(this.imageUrl);
  }
}
