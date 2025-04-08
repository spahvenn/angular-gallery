import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-call-to-action',
  standalone: true,
  imports: [MatButton, RouterModule, MatAnchor],
  templateUrl: './hero-call-to-action.component.html',
  styleUrl: './hero-call-to-action.component.scss',
})
export class HeroCallToActionComponent {}
