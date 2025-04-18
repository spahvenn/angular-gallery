import { Component, OnInit } from '@angular/core';
import { Toast, ToastService } from '../../services/toast/toast.service';
import { NgClass, NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor, MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgClass, MatIcon, MatAnchor, RouterLink, MatButton, NgIf],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toastService.toast$.subscribe((toast: Toast) => {
      this.toasts.push(toast);
    });
  }

  removeToast(toast: Toast) {
    toast.exiting = true;
    setTimeout(() => {
      this.toasts = this.toasts.filter(t => t !== toast);
    }, 300);
  }

  onGoToCartButtonClick() {
    this.toasts = [];
    this.router.navigate(['/shopping-cart']);
  }

  isShoppingCartPage() {
    return this.router.url === '/shopping-cart';
  }
}
