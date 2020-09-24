import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {PaymentService} from '../../payments/payment.service';
import {PromotionService} from '../promotion.service';

@Component({
  selector: 'app-edit-promotion',
  templateUrl: './edit-promotion.component.html',
  styleUrls: ['./edit-promotion.component.css']
})
export class EditPromotionComponent implements OnInit {
  alert = false;
  editPromotion = new FormGroup({
    promotion_id: new FormControl(''),
    promotion_name: new FormControl(''),
    promotion_cost: new FormControl(''),
    duration: new FormControl(''),
    promotion_status: new FormControl('')
  });

  constructor(private router: ActivatedRoute, private promotionService: PromotionService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.promotionService.getCurrentPromotion(this.router.snapshot.params.id).subscribe((result) => {
        this.editPromotion = new FormGroup({
          promoted_ad_id: new FormControl(result['promotion_id']),
          payment_time: new FormControl(result['promotion_name']),
          paid_amount: new FormControl(result['promotion_cost']),
          payment_date: new FormControl(result['duration']),
          payment_status: new FormControl(result['promotion_status'])
        });
      });
  }

  savePromotion()
  {
    console.warn(this.editPromotion.value);
    this.promotionService.updatePromotion(this.router.snapshot.params.id, this.editPromotion.value).subscribe((result) => {
      this.alert = true;
    });
  }

  closeAlert()
  {
    this.alert = false;
  }

}
