import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skip-link',
  standalone: true,
  imports: [],
  templateUrl: './skip-link.component.html',
  styleUrl: './skip-link.component.scss',
})
export class SkipLinkComponent {
  @ViewChild('skipLink') skipLink!: ElementRef<HTMLAnchorElement>;

  scrollToMainContent(event: Event): void {
    event.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      mainContent.focus();
      // Make skip link lose focus and hide
      this.skipLink.nativeElement.blur();
    }
  }
}
