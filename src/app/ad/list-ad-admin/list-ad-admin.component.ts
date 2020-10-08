import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { Router } from '@angular/router';
import { Ad } from 'src/app/models/ad';

@Component({
  selector: 'app-list-ad-admin',
  templateUrl: './list-ad-admin.component.html',
  styleUrls: ['./list-ad-admin.component.css'],
})
export class ListAdAdminComponent implements OnInit {
  ads: Ad[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.ads = [
      {
        id: 1,
        ad_category: 1,
        name: 'Lili',
        price: 100,
        ad_posted_date: new Date('1-2-2020'),
        ad_posted_by: 'Nada Abdelmaboud',
        city: 1,
      },
      {
        id: 2,
        ad_category: 1,
        name: 'Lili',
        price: 100,
        ad_posted_date: new Date('1-2-2020'),
        ad_posted_by: 'Nada Abdelmaboud',
        city: 1,
      },
      {
        id: 3,
        ad_category: 1,
        name: 'Lili',
        price: 100,
        ad_posted_date: new Date('1-2-2020'),
        ad_posted_by: 'Nada Abdelmaboud',
        city: 1,
      },
    ];
  }
  editAd(id) {
    this.router.navigate([`/ads/edit/${id}`]);
  }
  deleteAd(id) {}
}
