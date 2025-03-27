import { Component } from '@angular/core';
import { PageContentContainerComponent } from '../../layout/page-content-container/page-content-container.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PageContentContainerComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {}
