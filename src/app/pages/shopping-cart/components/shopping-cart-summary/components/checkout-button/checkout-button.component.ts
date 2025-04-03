import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-checkout-button',
  standalone: true,
  imports: [MatButton, MatIcon],
  templateUrl: './checkout-button.component.html',
  styleUrl: './checkout-button.component.scss',
})
export class CheckoutButtonComponent {
  onClick(): void {
    alert('This is the end of the demo, thanks for trying it out!');
  }
}
