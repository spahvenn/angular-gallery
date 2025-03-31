import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-season-card',
  standalone: true,
  imports: [NgOptimizedImage, MatAnchor],
  templateUrl: './season-card.component.html',
  styleUrl: './season-card.component.scss',
})
export class SeasonCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() imageAlt!: string;
}
