import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatCard, MatIcon, MatIconButton],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  currentIndex = 0;

  slides = [
    {
      img: 'store-item-images/1.jpg',
      title: 'Slide 1',
      description: 'This is the first slide',
    },
    {
      img: 'store-item-images/2.jpg',
      title: 'Slide 2',
      description: 'Here comes the second one!',
    },
    {
      img: 'store-item-images/3.jpg',
      title: 'Slide 3',
      description: 'And the final slide',
    },
  ];

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 5000);
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
