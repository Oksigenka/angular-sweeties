import { Component } from '@angular/core';
import { HotMenuComponent } from '../hot-menu/hot-menu.component';
import { HeaderComponent } from '../header/header.component';
import { TopBarComponent } from '../../modules/top-bar/top-bar.component';
import { InformaciaComponent } from '../informacia/informacia.component';
import { RouterOutlet } from '@angular/router';
import { AboutAsComponent } from '../about-as/about-as.component';
import { ReviewComponent } from '../review/review.component';
import { FooterComponent } from '../footer/footer.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    TopBarComponent,
    HotMenuComponent,
    InformaciaComponent,
    AboutAsComponent,
    ReviewComponent,
    FooterComponent,
    CartComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
