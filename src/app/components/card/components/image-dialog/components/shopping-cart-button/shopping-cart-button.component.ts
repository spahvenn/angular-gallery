import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { CartService } from '../../../../../../services/cart-service.service';
import { StoreItem } from '../../../../../../data/store-items';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping-cart-button',
  standalone: true,
  imports: [MatButton],
  templateUrl: './shopping-cart-button.component.html',
  styleUrl: './shopping-cart-button.component.scss',
})
export class ShoppingCartButtonComponent {
  private cartItemIds: string[] = [];
  @Input() storeItem!: StoreItem;

  constructor(
    private cartService: CartService,
    private dialogRef: MatDialogRef<ShoppingCartButtonComponent>
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cartItemIds => {
      this.cartItemIds = cartItemIds;
    });
  }

  isInCart(): boolean {
    return this.cartItemIds.includes(this.storeItem.id);
  }

  async toggleCart() {
    this.dialogRef.close();
    // Add a small delay to ensure the button text does change before dialog is closed
    await new Promise(resolve => setTimeout(resolve, 100));
    if (this.isInCart()) {
      this.cartService.removeFromCart(this.storeItem.id);
    } else {
      this.cartService.addToCart(this.storeItem.id);
    }
  }
}
