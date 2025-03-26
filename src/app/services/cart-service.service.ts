import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'shoppingCart';
  private cartSubject = new BehaviorSubject<string[]>([]);
  cart$ = this.cartSubject.asObservable(); // exposed observable for UI

  constructor() {
    const savedCart = localStorage.getItem(this.storageKey);
    const cart = savedCart ? JSON.parse(savedCart) : [];
    this.cartSubject.next(cart);
  }

  private saveAndEmit(cart: string[]) {
    this.cartSubject.next(cart);
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  addToCart(imageUrl: string) {
    const updated = [...this.cartSubject.value, imageUrl];
    this.saveAndEmit(updated);
  }

  removeFromCart(imageUrl: string) {
    const updated = this.cartSubject.value.filter(url => url !== imageUrl);
    this.saveAndEmit(updated);
  }

  clearCart() {
    this.saveAndEmit([]);
  }
}