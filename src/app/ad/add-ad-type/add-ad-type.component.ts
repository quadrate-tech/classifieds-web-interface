import { Component, OnInit } from '@angular/core';
import { AdType } from 'src/app/models/ad-type';

@Component({
  selector: 'app-add-ad-type',
  templateUrl: './add-ad-type.component.html',
  styleUrls: ['./add-ad-type.component.css'],
})
export class AddAdTypeComponent implements OnInit {
  adType: AdType;
  constructor() {}

  ngOnInit(): void {
    this.adType = new AdType();
  }
  addType() {}
}
