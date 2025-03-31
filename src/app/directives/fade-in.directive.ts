import { Directive, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective implements AfterViewInit, OnDestroy {
  @Input() fadeInDuration: number = 1.5;
  
  private observer!: IntersectionObserver;
  private element: HTMLElement;

  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement;
  }

  ngAfterViewInit() {
    this.element.style.opacity = '0';
    this.element.style.transition = `opacity ${this.fadeInDuration}s ease`;
    this.element.style.display = 'block';

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.element.style.opacity = '1';
          this.observer.unobserve(this.element);
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.element);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
} 