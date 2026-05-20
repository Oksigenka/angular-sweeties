import { Component, Input } from '@angular/core';
import { Product } from '../../services/product';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartItem, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})

export class ProductCardComponent {
  @Input() item!: Product;

  constructor(private cart: CartService, private router: Router) {}

  goToProduct(id: number) {
    this.router.navigate(['/menu', 'product', id]);
  }

  addToCard(event: Event, item: any) {
    event.stopPropagation();

    if (!this.isInCart(item.id)) {
      this.cart.addToCart({
        ...item,
        quantity: 1
      });
    }
  }

  isInCart(id: number): boolean {
    return this.cart.items.some(item => item.id === id);
  }
}
