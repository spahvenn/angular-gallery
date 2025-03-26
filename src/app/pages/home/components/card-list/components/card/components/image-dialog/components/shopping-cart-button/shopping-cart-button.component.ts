import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { CartService } from '../../../../../../../../../../services/cart-service.service';
import { StoreItem } from '../../../../../../../../../../directives/store-items';

@Component({
  selector: 'app-shopping-cart-button',
  standalone: true,
  imports: [MatButton],
  templateUrl: './shopping-cart-button.component.html',
  styleUrl: './shopping-cart-button.component.scss',
})
export class ShoppingCartButtonComponent {
  @Input() storeItem!: StoreItem;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.storeItem.id);
  }
}
