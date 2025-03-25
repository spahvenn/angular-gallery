import { Component, inject, model } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { FadeInImgComponent } from '../../../../../../../../components/fade-in-img';

export interface DialogData {
  imgUrl: string;
}

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, FadeInImgComponent],
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
