// toast.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Toast {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  exiting?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new Subject<Toast>();
  toast$ = this.toastSubject.asObservable();

  show(toast: Toast) {
    this.toastSubject.next(toast);
  }
}
