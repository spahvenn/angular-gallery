import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { NgOptimizedImage } from '@angular/common';
import { ShoppingCartButtonComponent } from './components/shopping-cart-button/shopping-cart-button.component';
import { MatButton } from '@angular/material/button';

export interface DialogData {
  imgUrl: string;
}

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    NgOptimizedImage,
    ShoppingCartButtonComponent,
    MatButton,
  ],
  templateUrl: './image-dialog.component.html',
  styleUrl: './image-dialog.component.scss',
})
export class ImageDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ImageDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly imgUrl = this.data.imgUrl;

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
