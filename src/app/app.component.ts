import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HotMenuComponent } from "./components/hot-menu/hot-menu.component";
import { InformaciaComponent } from "./components/informacia/informacia.component";
import { AboutAsComponent } from "./components/about-as/about-as.component";
import { ReviewComponent } from "./components/review/review.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TopBarComponent } from "./modules/top-bar/top-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    TopBarComponent,
    HotMenuComponent,
    InformaciaComponent,
    AboutAsComponent,
    ReviewComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sweties';
}
