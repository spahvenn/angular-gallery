import { Component } from '@angular/core';
import { CartService } from '../../../../services/cart/cart.service';
import { CardComponent } from '../../../../components/card/card.component';
import { STORE_ITEMS, StoreItem } from '../../../../data/store-items';

@Component({
  selector: 'app-shopping-cart-image-list',
  standalone: true,
  templateUrl: './shopping-cart-image-list.component.html',
  styleUrl: './shopping-cart-image-list.component.scss',
  imports: [CardComponent],
})
export class ShoppingCartImageListComponent {
  cartItems: StoreItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cartItemIds => {
      console.log(cartItemIds);
      this.cartItems = cartItemIds.map(
        cartItemId => STORE_ITEMS.find(item => item.id === cartItemId) as StoreItem
      );
      console.log(this.cartItems);
    });
  }
}
