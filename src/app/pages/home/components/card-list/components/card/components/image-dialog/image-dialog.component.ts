import { Component, inject, model } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { NgOptimizedImage } from '@angular/common';
import { FadeInDirective } from '../../../../../../../../directives/fade-in.directive';

export interface DialogData {
  imgUrl: string;
}

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, NgOptimizedImage, FadeInDirective],
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
