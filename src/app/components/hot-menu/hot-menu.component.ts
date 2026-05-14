import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartItem, CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../services/product';
import { ProductCardComponent } from '../../modules/product-card/product-card.component';

@Component({
  selector: 'app-hot-menu',
  standalone: true,
  imports: [RouterLink, CommonModule, ProductCardComponent],
  templateUrl: './hot-menu.component.html',
  styleUrl: './hot-menu.component.scss'
})
export class HotMenuComponent {
  constructor(private cart: CartService, private http: HttpClient, private router: Router) {}

  items: Product[] = [];

  ngOnInit() {
    this.http.get<Product[]>('assets/products.json')
      .subscribe(data => this.items = data);
  }
  
  currentIndex = 0;
  visibleCount = 4;

  get visibleItems(): Product[] {
    return this.items.slice(
      this.currentIndex,
      this.currentIndex + this.visibleCount
    );
  }

  next() {
    if (this.currentIndex + this.visibleCount < this.items.length) {
      this.currentIndex = this.currentIndex + 2;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex = this.currentIndex - 2;
    }
  }

  goToProduct(id: number) {
    this.router.navigate(['/menu', 'product', id]);
  }

  add(item: Omit<CartItem, 'quantity'>) {
    this.cart.addToCart({
      ...item,
      quantity: 1
    });
  }
}
