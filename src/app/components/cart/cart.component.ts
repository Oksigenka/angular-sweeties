import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  isOpen = false;

  constructor(public cart: CartService) {}

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
