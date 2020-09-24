import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../promotion.service';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.css']
})
export class ListPromotionComponent implements OnInit {

  constructor(private promotionService: PromotionService) {}
  promotionList: any = [];

  ngOnInit(): void {
    this.promotionService.getList().subscribe((result) => {
      this.promotionList = result;
    });
  }

  deletePromotion(item) {
    this.promotionList.splice(item - 1, 1);
    this.promotionService.deletePromotion(item).subscribe((result) => {
    });
  }


}
