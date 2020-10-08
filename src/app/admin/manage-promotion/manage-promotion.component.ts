import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-promotion',
  templateUrl: './manage-promotion.component.html',
  styleUrls: ['./manage-promotion.component.css'],
})
export class ManagePromotionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  addPromotion() {
    this.router.navigate(['/promotion/add']);
  }
}
