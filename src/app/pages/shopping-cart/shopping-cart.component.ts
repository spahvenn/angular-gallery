import { Component } from '@angular/core';
import { PageContentContainerComponent } from '../../layout/page-content-container/page-content-container.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  imports: [PageContentContainerComponent],
})
export class ShoppingCartComponent {}
