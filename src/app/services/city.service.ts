import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CityService {
  createAdCity: { id: number; name: string };
  cities = [
    { id: 1, name: 'cairo' },
    { id: 2, name: 'giza' },
    { id: 3, name: 'alex' },
  ];

  constructor() {
    this.createAdCity = this.cities[0];
  }
  setAdCity(city) {
    this.createAdCity = city;
  }
  getAdCity() {
    return this.createAdCity.id;
  }
  getCities() {
    return this.cities;
  }
}
