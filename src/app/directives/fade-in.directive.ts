import { Directive, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective implements AfterViewInit, OnDestroy {
  @Input() fadeInDuration: number = 1.5;
  
  private observer!: IntersectionObserver;
  private img: HTMLImageElement;

  constructor(private el: ElementRef) {
    this.img = this.el.nativeElement;
  }

  ngAfterViewInit() {
    this.img.style.opacity = '0';
    this.img.style.transition = `opacity ${this.fadeInDuration}s ease`;
    this.img.style.display = 'block';

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.img.style.opacity = '1';
          this.observer.unobserve(this.img);
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.img);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
} 