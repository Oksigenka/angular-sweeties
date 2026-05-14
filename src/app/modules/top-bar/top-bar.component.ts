  import { Component, EventEmitter, Output } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavBarComponent
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})

export class TopBarComponent {
  @Output() openCart = new EventEmitter<void>();

  constructor(public cart: CartService) {}

  onMenuClose() {
    console.log('Menu closed');
  }
}
