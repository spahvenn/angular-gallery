import { Component } from '@angular/core';
import { ShoppingCartImageListComponent } from './components/shopping-cart-image-list/shopping-cart-image-list.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { CartService } from '../../services/cart/cart.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  imports: [ShoppingCartImageListComponent, ShoppingCartSummaryComponent, NgIf],
})
export class ShoppingCartComponent {
  protected cartItemIds!: string[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cartItemIds => {
      this.cartItemIds = cartItemIds;
    });
  }
}
