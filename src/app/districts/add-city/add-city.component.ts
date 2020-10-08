import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css'],
})
export class AddCityComponent implements OnInit {
  city: City;
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.city = new City();
  }
  addCity() {}
}
