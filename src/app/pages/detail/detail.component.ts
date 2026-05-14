import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartItem, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  product: any;

  constructor(
    private cart: CartService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.loadProduct(id);
    });
  }

  loadProduct(id: number) {
    this.http.get<any[]>('assets/products.json').subscribe(data => {
      this.product = data.find(p => p.id === id);
    });
  }

  add(item: any) {
    this.cart.addToCart({
      ...item,
      quantity: 1
    });
  }
}
