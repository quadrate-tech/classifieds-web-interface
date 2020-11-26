import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

import {AdType} from '../models/ad-Type';
@Injectable({
  providedIn: 'root',
})


export class AdTypeService {

  private adtype : AdType[] = [];
  //private promotionUpdated = new Subject<AdType[]>();
  types = [
    { id: 1, name: 'job' },
    { id: 2, name: 'rent' },
    { id: 3, name: 'sale' },
  ];
  adType: number;
  constructor() {
    this.adType = this.types[0].id;
  }
  setAdType(adType) {
    this.adType = adType;
  }
  getAdType() {
    return this.adType;
  }
  getTypes() {
    //set types array from api
    return this.types;
  }
}
