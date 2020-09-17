import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdTypeService {
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
