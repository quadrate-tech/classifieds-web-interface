import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { District } from 'src/app/models/district';

@Component({
  selector: 'app-list-districts',
  templateUrl: './list-districts.component.html',
  styleUrls: ['./list-districts.component.css'],
})
export class ListDistrictsComponent implements OnInit {
  districts: District[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.districts = [
      { district_name: 'Cairo', district_id: 1 },
      { district_name: 'Alex', district_id: 2 },
    ];
  }

  editDistrict(id): void {
    this.router.navigate([`/district/edit/${id}`]);
  }
  deleteDistrict(id): void {}

}
