import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { AdModule } from '../ad/ad.module';
@NgModule({
  declarations: [
    NavbarComponent,
    ContactComponent,
    LoginComponent,
    AboutComponent,
    HomeWelcomeComponent,
    RegisterComponent,
    ShopComponent,
  ],
  imports: [CommonModule, RouterModule, AdModule],
  exports: [
    NavbarComponent,
    ContactComponent,
    LoginComponent,
    AboutComponent,
    HomeWelcomeComponent,
  ],
})
export class HomeModule {}
