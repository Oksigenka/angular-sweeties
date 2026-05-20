import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Option {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})

export class CustomComponent {
  basePrice = 25;

  // 🔹 FLAVORS
  flavors: Option[] = [
    {
      id: 1,
      name: 'Classic Vanilla',
      description: 'Light, airy vanilla sponge',
      price: 0,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Rich Chocolate',
      description: 'Dark chocolate base',
      price: 3,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Red Velvet',
      description: 'Velvety cocoa sponge',
      price: 3,
      image: 'https://via.placeholder.com/150',
    },
  ];

  // 🔹 SIZES
  sizes: Option[] = [
    { id: 1, name: 'Small', description: '6 inch', price: 0, image: '' },
    { id: 2, name: 'Medium', description: '8 inch', price: 5, image: '' },
    { id: 3, name: 'Large', description: '10 inch', price: 10, image: '' },
  ];

  selectedFlavor?: Option;
  selectedSize?: Option;

  // 🔹 SELECT
  selectFlavor(f: Option) {
    this.selectedFlavor = f;
  }

  selectSize(s: Option) {
    this.selectedSize = s;
  }

  // 🔹 TOTAL
  get total(): number {
    return (
      this.basePrice +
      (this.selectedFlavor?.price || 0) +
      (this.selectedSize?.price || 0)
    );
  }

  get isValid(): boolean {
    return !!this.selectedFlavor && !!this.selectedSize;
  }
}
