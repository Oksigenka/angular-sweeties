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

  add(item: any) {
    this.cart.addToCart({
      ...item,
      quantity: 1
    });
  }
}
