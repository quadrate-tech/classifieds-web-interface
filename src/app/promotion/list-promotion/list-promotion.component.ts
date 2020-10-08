import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.css'],
})
export class ListPromotionComponent implements OnInit {
  constructor(
    private promotionService: PromotionService,
    private router: Router
  ) {}
  promotionList: any = [];

  ngOnInit(): void {
    this.promotionService.getList().subscribe((result) => {
      this.promotionList = result;
    });
  }
  editPromotion(id) {
    this.router.navigate([`/promotion/edit/${id}`]);
  }
  deletePromotion(item) {
    this.promotionList.splice(item - 1, 1);
    this.promotionService.deletePromotion(item).subscribe((result) => {});
  }
}
