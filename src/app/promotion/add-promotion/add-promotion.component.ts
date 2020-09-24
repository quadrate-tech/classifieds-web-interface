import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PromotionService} from '../promotion.service';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent implements OnInit {
  alert = false;
  addPromotion = new FormGroup({
    promotion_id: new FormControl(''),
    promotion_name: new FormControl(''),
    promotion_cost: new FormControl(''),
    duration: new FormControl(''),
    promotion_status: new FormControl('')
  });

  constructor(private promotionService: PromotionService) { }

  ngOnInit(): void {
  }

  savePromotion(){
    this.promotionService.savePromotion(this.addPromotion.value).subscribe((result) => {
      this.alert = true;
      this.addPromotion.reset({});
    });
  }

  closeAlert(){
    this.alert = false;
  }

}
