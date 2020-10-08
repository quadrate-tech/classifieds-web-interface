import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-welcome',
  templateUrl: './home-welcome.component.html',
  styleUrls: ['./home-welcome.component.css'],
})
export class HomeWelcomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navShop() {
    this.router.navigate(['/shop']);
  }
}
