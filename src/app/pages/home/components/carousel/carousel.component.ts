import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatCard, MatIcon, MatIconButton, NgOptimizedImage],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  currentIndex = 0;

  slides = [
    { img: 'front-page/summer.jpg', title: 'Slide', description: '' },
    {
      img: 'front-page/autumn.jpg',
      title: 'Slide',
      description: '',
    },
    {
      img: 'front-page/winter.jpg',
      title: 'Slide',
      description: '',
    },
    {
      img: 'front-page/spring.jpg',
      title: 'Slide',
      description: '',
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
