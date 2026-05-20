import { Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./pages/menu/menu.component').then(m => m.MenuComponent)
  },
  {
    path: 'menu/product/:id',
    loadComponent: () =>
      import('./pages/detail/detail.component').then(m => m.DetailComponent)
  },
  {
    path: 'menu/product/:id',
    loadComponent: () =>
      import('./pages/detail/detail.component').then(m => m.DetailComponent)
  },
  {
    path: 'menu/custom',
    loadComponent: () =>
      import('./pages/custom/custom.component').then(m => m.CustomComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'reviews',
    loadComponent: () =>
      import('./pages/reviews/reviews.component').then(m => m.ReviewsComponent)
  },
  { path: 'checkout', component: CheckoutComponent }
];
