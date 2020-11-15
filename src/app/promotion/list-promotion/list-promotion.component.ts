import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PromotionService} from '../../services/promotion.service';
import { Promotion } from '../../models/promotion';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.css'],
})
export class ListPromotionComponent implements OnInit {
  promotions: Promotion[];

  constructor(
    private promotionService: PromotionService,
    private router: Router
  ) {}
  promotionList: any = [];

  ngOnInit(): void {
    // this.promotionService.getPromotion().subscribe((result) => {
    //   this.promotionList = result;;
    this.promotions = this.promotionService.getPromotion();
    console.log(this.promotions);
    this.promotionService.getPromotionUpdateListner().subscribe((promotions: Promotion[]) => {
      this.promotions = promotions;
    });

  }
  editPromotion(id) {
    this.promotionService.selected(id);
    this.router.navigate([`/promotion/edit/${id}`]);
  }
  // deletePromotion(item) {
  //   this.promotionList.splice(item - 1, 1);
  //   this.promotionService.deletePromotion(item).subscribe((result) => {});
  // }
}
