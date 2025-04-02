import { Component, OnInit } from '@angular/core';
import { Toast, ToastService } from '../../services/toast/toast.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toast$.subscribe((toast: Toast) => {
      this.toasts.push(toast);
      setTimeout(() => this.removeToast(toast), toast.duration || 3000);
    });
  }

  removeToast(toast: Toast) {
    toast.exiting = true;
    setTimeout(() => {
      this.toasts = this.toasts.filter(t => t !== toast);
    }, 300);
  }
}
