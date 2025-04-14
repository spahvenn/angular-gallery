import { Component, inject, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StoreItem } from '../../data/store-items';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  imports: [NgOptimizedImage, FadeInDirective, NgIf],
  styleUrl: './card.component.scss',
})
export class CardComponent {
  readonly dialog = inject(MatDialog);
  protected cartItemIds!: string[];
  @Input() storeItem!: StoreItem;
  @Input() showInCartLabel = false;
  @Input({ required: true }) imgSizes!: string;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cartItemIds => {
      this.cartItemIds = cartItemIds;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      data: { storeItem: this.storeItem },
      maxWidth: '1200px',
      width: '100%',
      panelClass: 'image-dialog-container',
      ariaLabel: this.storeItem.alt + ' image preview dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
