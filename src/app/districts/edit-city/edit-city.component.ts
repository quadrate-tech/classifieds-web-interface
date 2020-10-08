import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/models/city';
@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css'],
})
export class EditCityComponent implements OnInit {
  city_id: number;
  city: City;
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.city = new City();
    this.city_id = this.activeRouter.snapshot.params['id'];
  }
  editCity() {}
}
