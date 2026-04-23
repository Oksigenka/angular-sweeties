import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
 @Output() close = new EventEmitter<void>();

 links = [
  {path: '/', label: 'Home', exact: true},
  {path: '/menu', label: 'Menu'},
  {path: '/about', label: 'About Us'},
  {path: '/reviews', label: 'Reviews'},
 ];

 onClose() {
  this.close.emit();
 }
}
