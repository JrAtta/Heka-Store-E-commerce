import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
// import { NavHomeComponent } from './components/nav-home/nav-home.component';
// import { HomeComponent } from './components/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';
// import { RegisterComponent } from './components/register/register.component';
import { NgIf } from '@angular/common';
// import { AccordionCategoryComponent } from "./components/accordion-category/accordion-category.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    HeaderComponent,
    // NavHomeComponent,
    // HomeComponent,
    MenuBarComponent,
    FooterComponent,
    // RegisterComponent,
    NgIf,
    // AccordionCategoryComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements DoCheck {
  title = 'store';
  checkPath: boolean = false;
  constructor(private _Router: Router) {}
  ngDoCheck(): void {
    if (
      this._Router.url.includes('register') ||
      this._Router.url.includes('login') ||
      this._Router.url.includes('forgetPassword')
    ) {
      this.checkPath = false;
    } else {
      this.checkPath = true;
    }
  }
}
