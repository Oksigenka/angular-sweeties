import { Component } from '@angular/core';

interface Option {
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})

export class CustomComponent {
  basePrice = 25;

  // 🔹 FLAVORS
  flavors: Option[] = [
    {
      name: 'Classic Vanilla',
      description: 'Light, airy vanilla sponge',
      price: 0,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Rich Chocolate',
      description: 'Dark chocolate base',
      price: 3,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Red Velvet',
      description: 'Velvety cocoa sponge',
      price: 3,
      image: 'https://via.placeholder.com/150',
    },
  ];

  // 🔹 SIZES
  sizes: Option[] = [
    { name: 'Small', description: '6 inch', price: 0, image: '' },
    { name: 'Medium', description: '8 inch', price: 5, image: '' },
    { name: 'Large', description: '10 inch', price: 10, image: '' },
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
