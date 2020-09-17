import { Injectable } from '@angular/core';
import { Ad } from '../models/ad';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AdService {
  userAds: Array<Ad>;
  currentUser;
  cities = [
    { id: '1', name: 'cairo' },
    { id: '2', name: 'giza' },
    { id: '3', name: 'alex' },
  ];

  constructor() {
    //should call get user ads from server
    this.userAds = [];
    this.currentUser = localStorage.getItem('user');
  }
  createAd(ad: Ad) {
    //should call create route from api
    ad.ad_posted_by = this.currentUser;
    ad.ad_posted_date = new Date(Date.now());
    this.userAds.push(ad);
    return this.userAds;
  }
  getCurrentUserAds() {
    return this.userAds;
  }
}
