// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// export interface CartItem {
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   // CART ITEMS
//   private cartItems = new BehaviorSubject<CartItem[]>([]);
//   cart$ = this.cartItems.asObservable();

//   // CART OPEN/CLOSE
//   private cartOpen = new BehaviorSubject(false);
//   isOpen$ = this.cartOpen.asObservable();

//   get isOpen() {
//     return this.cartOpen.value;
//   }

//   openCart() {
//     this.cartOpen.next(true);
//   }

//   closeCart() {
//     this.cartOpen.next(false);
//   }

//   toggleCart() {
//     this.cartOpen.next(!this.isOpen);
//   }

//   get items(): CartItem[] {
//     return this.cartItems.value;
//   }

//   addToCart(item: CartItem) {
//     const existing = this.items.find(i => i.name === item.name);

//     if (existing) {
//       existing.quantity++;
//     } else {
//       this.items.push({ ...item, quantity: 1 });
//     }

//     this.cartItems.next([...this.items]);

//     // automatically open cart after add
//     this.openCart();
//   }

//   remove(item: CartItem) {
//     const filtered = this.items.filter(i => i !== item);
//     this.cartItems.next(filtered);
//   }

//   changeQty(item: CartItem, delta: number) {
//     item.quantity += delta;

//     if (item.quantity <= 0) {
//       this.remove(item);
//       return;
//     }

//     this.cartItems.next([...this.items]);
//   }

//   get total() {
//     return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
//   }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // LOAD FROM LOCAL STORAGE
  private savedCart = localStorage.getItem('cart');

  private cartItems = new BehaviorSubject<CartItem[]>(
    this.savedCart ? JSON.parse(this.savedCart) : []
  );

  cart$ = this.cartItems.asObservable();

  // CART OPEN/CLOSE
  private cartOpen = new BehaviorSubject(false);
  isOpen$ = this.cartOpen.asObservable();

  get isOpen() {
    return this.cartOpen.value;
  }

  openCart() {
    this.cartOpen.next(true);
  }

  closeCart() {
    this.cartOpen.next(false);
  }

  toggleCart() {
    this.cartOpen.next(!this.isOpen);
  }

  get items(): CartItem[] {
    return this.cartItems.value;
  }

  // SAVE TO LOCAL STORAGE
  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  addToCart(item: CartItem) {
    const existing = this.items.find(i => i.name === item.name);

    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }

    this.cartItems.next([...this.items]);

    // SAVE
    this.saveCart();

    // automatically open cart after add
    this.openCart();
  }

  remove(item: CartItem) {
    const filtered = this.items.filter(i => i !== item);

    this.cartItems.next(filtered);

    // SAVE
    this.saveCart();
  }

  changeQty(item: CartItem, delta: number) {

    // max stock
    if (delta > 0 && item.quantity >= item.stock) {
      return;
    }

    // min quantity
    if (delta < 0 && item.quantity <= 1) {
      return;
    }

    item.quantity += delta;

    this.cartItems.next([...this.items]);

    this.saveCart();
  }

  get total() {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
}
