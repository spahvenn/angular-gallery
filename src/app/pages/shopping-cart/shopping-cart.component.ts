import { Component } from '@angular/core';
import { PageContentContainerComponent } from '../../layout/page-content-container/page-content-container.component';
import { ShoppingCartImageListComponent } from './components/shopping-cart-image-list/shopping-cart-image-list.component';
import { CheckoutButtonComponent } from './components/shopping-cart-summary/components/checkout-button/checkout-button.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  imports: [
    PageContentContainerComponent,
    ShoppingCartImageListComponent,
    CheckoutButtonComponent,
    ShoppingCartSummaryComponent,
  ],
})
export class ShoppingCartComponent {}
