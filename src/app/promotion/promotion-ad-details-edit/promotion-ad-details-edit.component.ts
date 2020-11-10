import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PromotedAdDetails} from '../../models/promoted-ad-details.model';
import {PromotedAdDetailService} from '../../services/promoted-ad-detail.service';

@Component({
  selector: 'app-promotion-ad-details-edit',
  templateUrl: './promotion-ad-details-edit.component.html',
  styleUrls: ['./promotion-ad-details-edit.component.css']
})
export class PromotionAdDetailsEditComponent implements OnInit {
  public promotedAdDetails: PromotedAdDetails = new PromotedAdDetails( 0, 0, 0, '12/05/2020', '' , false);
  public type = 'Add';

  constructor(private promotedAdDetailService: PromotedAdDetailService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if ( Number(params.get('id') ) != null) {
        this.promotedAdDetailService.selected(Number(params.get('id')));
        this.promotedAdDetails = this.promotedAdDetailService.selectedPromotedAdDetails;
        this.type = 'Edit';
      }
    });
  }

  onAdd(): void {
    if (this.type === 'Add') {
      this.promotedAdDetailService.addPromotedAd(this.promotedAdDetails);
      this.router.navigate(['/promotedAd']);
    } else {
      this.promotedAdDetailService.updatePromotedAd(this.promotedAdDetails);
      this.router.navigate(['/promotedAd']);
    }
  }
}
