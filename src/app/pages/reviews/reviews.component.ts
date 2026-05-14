import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  items = [
    {
      name: 'Emily R.',
      user: 'Wedding Client',
      image: 'assets/products/strawberry-cake.jpg',
      description: '“Absolutely the best bakery in town! The Strawberry Dream Cake was the centerpiece of my daughter`s birthday and everyone was blown away. The flavors are so fresh and the presentation is stunning.”'
    },
    {
      name: 'Daniel K.',
      user: 'Regular Customer',
      image: 'assets/products/strawberry-cake.jpg',
      description: '“Fresh, delicious, and beautifully crafted pastries every single time. Highly recommended!”'
    },
    {
      name: 'Sophia L.',
      user: 'Food Blogger',
      image: 'assets/products/strawberry-cake.jpg',
      description: '“Their macarons are heavenly! You can taste the quality in every bite.”'
    },
    {
      name: 'Emily R.',
      user: 'Wedding Client',
      image: 'assets/products/strawberry-cake.jpg',
      description: '“Absolutely the best cakes I’ve ever tasted! The custom design for my wedding was beyond perfect.”'
    },
    {
      name: 'Emily R.',
      user: 'Wedding Client',
      image: 'assets/products/strawberry-cake.jpg',
      description: '“Absolutely the best cakes I’ve ever tasted! The custom design for my wedding was beyond perfect.”'
    },
    {
      name: 'Emily R.',
      user: 'Wedding Client',
      image: 'assets/products/strawberry-cake.jpg',
      description: '“Absolutely the best cakes I’ve ever tasted! The custom design for my wedding was beyond perfect.”'
    }
  ];
}
