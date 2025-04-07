import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatCard, MatIcon, NgOptimizedImage],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  currentIndex = 0;

  slides = [
    { img: 'summer_jxiic8.jpg', title: 'Slide', description: '', href: 'gallery' },
    {
      img: 'autumn_xck5ls.jpg',
      title: 'Slide',
      description: '',
      href: 'gallery',
    },
    {
      img: 'winter_aexj06.jpg',
      title: 'Slide',
      description: '',
      href: 'gallery',
    },
    {
      img: 'spring_ny5alk.jpg',
      title: 'Slide',
      description: '',
      href: 'gallery',
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
    } else {
      this.currentIndex = 0;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;
    }
  }
}
