import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-fade-in-img',
  standalone: true,
  template: `
    <img
      [ngSrc]="ngSrc"
      [alt]="alt"
      [width]="width"
      [height]="height"
      [loading]="loading"
      [class.appeared]="appeared"
      class="fade-in-img"
    />
  `,
  imports: [
    NgOptimizedImage
  ],
  styles: [`
    .fade-in-img {
      opacity: 0;
      transition: opacity 1.5s ease;
      display: block;
      width: 100%;
      height: auto;
    }

    .fade-in-img.appeared {
      opacity: 1;
    }
  `]
})
export class FadeInImgComponent implements AfterViewInit, OnDestroy {
  @Input() ngSrc!: string;
  @Input() alt: string = '';
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() loading?: 'lazy' | 'eager' = 'lazy';

  appeared = false;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const img: HTMLImageElement = this.el.nativeElement.querySelector('img');

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.appeared = true;
        this.observer.unobserve(img);
      }
    }, { threshold: 0.1 });

    this.observer.observe(img);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
