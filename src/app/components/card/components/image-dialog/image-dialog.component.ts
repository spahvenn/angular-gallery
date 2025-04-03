import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { NgOptimizedImage } from '@angular/common';
import { ShoppingCartButtonComponent } from './components/shopping-cart-button/shopping-cart-button.component';
import { MatButton } from '@angular/material/button';
import { StoreItem } from '../../../../data/store-items';

export interface DialogData {
  storeItem: StoreItem;
}

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [MatDialogActions, NgOptimizedImage, ShoppingCartButtonComponent, MatButton],
  templateUrl: './image-dialog.component.html',
  styleUrl: './image-dialog.component.scss',
})
export class ImageDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ImageDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly storeItem = this.data.storeItem;

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
