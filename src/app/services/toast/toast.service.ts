// toast.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Toast {
  id: number;
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
  private nextId = 0;
  toast$ = this.toastSubject.asObservable();

  show(toast: Omit<Toast, 'id'>) {
    this.toastSubject.next({ ...toast, id: this.nextId++ });
  }
}
