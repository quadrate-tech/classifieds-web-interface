import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromotedAdDetails } from '../../models/promoted-ad-details.model';
import { PromotedAdDetailService } from '../../services/promoted-ad-detail.service';

@Component({
  selector: 'app-promotion-ad-details',
  templateUrl: './promotion-ad-details.component.html',
  styleUrls: ['./promotion-ad-details.component.css'],
})
export class PromotionAdDetailsComponent implements OnInit {
  promotedAdDetails: PromotedAdDetails[];
  constructor(
    public promotedAdDetailService: PromotedAdDetailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.promotedAdDetails = this.promotedAdDetailService.getPromotedAd();
    console.log(this.promotedAdDetails);
    this.promotedAdDetailService
      .getPromotedAdUpdateListner()
      .subscribe((promotedAdDetails: PromotedAdDetails[]) => {
        this.promotedAdDetails = promotedAdDetails;
      });
  }

  editPromotion(id) {
    this.router.navigate([`/promotedAd/edit/${id}`]);
  }
}
