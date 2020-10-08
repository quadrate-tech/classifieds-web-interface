import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdType } from 'src/app/models/ad-type';

@Component({
  selector: 'app-list-ad-type',
  templateUrl: './list-ad-type.component.html',
  styleUrls: ['./list-ad-type.component.css'],
})
export class ListAdTypeComponent implements OnInit {
  adTypes: AdType[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.adTypes = [
      { id: 1, name: 'rent' },
      { id: 2, name: 'sale' },
      { id: 3, name: 'job' },
    ];
  }
  editType(id) {
    this.router.navigate([`/adType/edit/${id}`]);
  }
  deleteType(id) {}
}
