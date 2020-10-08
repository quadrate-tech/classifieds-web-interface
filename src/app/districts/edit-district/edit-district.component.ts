import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { District } from 'src/app/models/district';

@Component({
  selector: 'app-edit-district',
  templateUrl: './edit-district.component.html',
  styleUrls: ['./edit-district.component.css'],
})
export class EditDistrictComponent implements OnInit {
  district_id: number;
  district: District;
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.district = new District();
    this.district_id = this.activeRouter.snapshot.params['id'];
  }
  editDistrict() {}
}
