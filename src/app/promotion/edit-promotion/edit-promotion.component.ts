
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Promotion} from '../../models/promotion';
import {PromotionService} from '../../services/promotion.service';

@Component({
   selector: 'app-edit-promotion',
   templateUrl: './edit-promotion.component.html',
   styleUrls: ['./edit-promotion.component.css']
})
export class EditPromotionComponent implements OnInit {
  public promotion: Promotion;
  public type = 'Add';

  constructor(private promotionService: PromotionService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if ( Number(params.get('id') ) != null) {
        this.promotionService.selected(params.get('id'));
        this.promotion = this.promotionService.selectedPromotion;
        this.type = 'Edit';
        this.type = 'Edit';
        console.log(this.promotion);
      }else {
        this.promotion = new Promotion( 0, '', 0, 0, true );
      }
    });
  }

  onAdd(): void {
    if (this.type === 'Add') {
      this.promotionService.addPromotion(this.promotion);
      this.router.navigate(['/promotion/add']);
    } else {
      this.promotionService.updatePromotion(this.promotion);
      this.router.navigate(['/promotion/list']);
    }
  }
}
