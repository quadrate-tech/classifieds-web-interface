import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { District } from 'src/app/models/district';

@Component({
  selector: 'app-create-district',
  templateUrl: './create-district.component.html',
  styleUrls: ['./create-district.component.css'],
})
export class CreateDistrictComponent implements OnInit {
  district: District;
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.district = new District();
  }
  addDistrict() {}
}
