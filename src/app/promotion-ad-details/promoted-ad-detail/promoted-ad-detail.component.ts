import {Component, Input, OnInit} from '@angular/core';
import {PromotedAdDetails} from '../../models/promoted-ad-details.model';
import {PromotedAdDetailService} from '../../services/promoted-ad-detail.service';

@Component({
  selector: 'app-promoted-ad-detail',
  templateUrl: './promoted-ad-detail.component.html',
  styleUrls: ['./promoted-ad-detail.component.css']
})
export class PromotedAdDetailComponent implements OnInit {
  @Input() promotedAdDetails: PromotedAdDetails;
  constructor( private promotedAdDetailService: PromotedAdDetailService) { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.promotedAdDetailService.deletePromotedAd(this.promotedAdDetails.Pa_ad_id);
  }

  onSelect(): void {
    this.promotedAdDetailService.selectedPromotedAdDetails = this.promotedAdDetails;
  }

}
