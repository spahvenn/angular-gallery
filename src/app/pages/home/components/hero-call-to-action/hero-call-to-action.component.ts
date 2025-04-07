import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-hero-call-to-action',
  standalone: true,
  imports: [MatButton],
  templateUrl: './hero-call-to-action.component.html',
  styleUrl: './hero-call-to-action.component.scss',
})
export class HeroCallToActionComponent {}
