import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey = 'shoppingCart';
  private cartSubject = new BehaviorSubject<number[]>([]);
  cart$ = this.cartSubject.asObservable(); // exposed observable for UI

  constructor() {
    const savedCart = localStorage.getItem(this.storageKey);
    const cart = savedCart ? JSON.parse(savedCart) : [];
    this.cartSubject.next(cart);
  }

  private saveAndEmit(cart: number[]) {
    this.cartSubject.next(cart);
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  addToCart(id: number) {
    const updated = [...this.cartSubject.value, id];
    this.saveAndEmit(updated);
  }

  removeFromCart(id: number) {
    const updated = this.cartSubject.value.filter(storeItemId => storeItemId !== id);
    this.saveAndEmit(updated);
  }

  clearCart() {
    this.saveAndEmit([]);
  }
}
