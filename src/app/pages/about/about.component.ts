import { Component } from '@angular/core';
import { PageContainerComponent } from '../../layout/page-container/page-container.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageContainerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
