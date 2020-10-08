import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css'],
})
export class ListCityComponent implements OnInit {
  cities: City[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cities = [
      { city_name: 'fisel', city_id: 1, district_id: 1 },
      { city_name: 'giza', city_id: 2, district_id: 1 },
    ];
  }
  editCity(id) {
    this.router.navigate([`/city/edit/${id}`]);
  }
  deleteCity(id) {}
}
