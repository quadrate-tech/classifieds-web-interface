import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdType } from 'src/app/models/ad-type';

@Component({
  selector: 'app-edit-ad-type',
  templateUrl: './edit-ad-type.component.html',
  styleUrls: ['./edit-ad-type.component.css'],
})
export class EditAdTypeComponent implements OnInit {
  adTypeId: number;
  adType: AdType;
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.adType = new AdType();
    this.adTypeId = this.activeRouter.snapshot.params['id'];
  }
  editType() {}
}
