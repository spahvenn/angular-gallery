import { Component, inject, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FadeInDirective } from '../../../../../../directives/fade-in.directive';
import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StoreItem } from '../../../../../../data/store-items';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  imports: [NgOptimizedImage, FadeInDirective],
  styleUrl: './card.component.scss',
})
export class CardComponent {
  readonly dialog = inject(MatDialog);

  @Input() storeItem!: StoreItem;

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      data: { storeItem: this.storeItem },
      maxWidth: '1200px',
      width: '100%',
      panelClass: 'image-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
