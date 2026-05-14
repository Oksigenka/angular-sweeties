import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductCardComponent } from '../../modules/product-card/product-card.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProductCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent implements OnInit {
  categories = ['ALL', 'CAKES', 'PASTRIES', 'COOKIES', 'SPECIALTY'];
  activeCategory = 'ALL';

  constructor(private http: HttpClient, private router: Router) {}

  items: Product[] = [];

  ngOnInit() {
    this.http.get<Product[]>('assets/products.json')
      .subscribe(data => this.items = data);
  }

  get filteredItems(): Product[] {
    if (this.activeCategory === 'ALL') return this.items;
    return this.items.filter(i => i.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }
}
