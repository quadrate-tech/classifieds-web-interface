import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-districts',
  templateUrl: './manage-districts.component.html',
  styleUrls: ['./manage-districts.component.css'],
})
export class ManageDistrictsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  addDistrict() {
    this.router.navigate(['/district/add']);
  }
}
