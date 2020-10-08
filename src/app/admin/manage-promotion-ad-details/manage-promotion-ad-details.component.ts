import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-promotion-ad-details',
  templateUrl: './manage-promotion-ad-details.component.html',
  styleUrls: ['./manage-promotion-ad-details.component.css'],
})
export class ManagePromotionAdDetailsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  addPromotionAdDetails() {
    this.router.navigate(['/promotedAd/add']);
  }
}
