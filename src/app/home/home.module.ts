import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ContactComponent,
    LoginComponent,
    AboutComponent,
    HomeWelcomeComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    ContactComponent,
    LoginComponent,
    AboutComponent,
    HomeWelcomeComponent,
  ],
})
export class HomeModule {}
