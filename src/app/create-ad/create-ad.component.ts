import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubCategoryService } from '../services/sub-category.service';
import { AdTypeService } from '../services/ad-type.service';
import { CityService } from '../services/city.service';

import { Ad } from '../models/ad';
import { AdService } from '../services/ad.service';
@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css'],
})
export class CreateAdComponent implements OnInit {
  ad: Ad;
  minusInputs: Boolean;
  cities: Array<object>;
  types: Array<object>;
  constructor(
    private SubCategoryService: SubCategoryService,
    private AdTypeService: AdTypeService,
    private CityService: CityService,
    private AdService: AdService
  ) {
    this.ad = new Ad();
    this.minusInputs = false;
  }
  createAdForm = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    images: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.cities = this.CityService.getCities();
    this.types = this.AdTypeService.getTypes();
  }
  get name() {
    return this.createAdForm.get('name');
  }
  get price() {
    return this.createAdForm.get('price');
  }
  get images() {
    return this.createAdForm.get('images');
  }
  get city() {
    return this.createAdForm.get('city');
  }
  get type() {
    return this.createAdForm.get('type');
  }
  createAd() {
    this.ad = this.createAdForm.value;
    console.log(this.AdService.createAd(this.ad));
  }
  addImage() {
    let image = document.getElementById('imagesInputs');
    let newInput = document.createElement('input');
    image.innerHTML += `  <input
    formControlName="images"
    type="text"
    id="images"
    class="form-control"
  />`;
    this.minusInputs = true;
  }
  minusImage() {
    let image = document.getElementById('imagesInputs');
    image.removeChild(image.lastElementChild);
    console.log(image);
    if (image.children.length == 1) {
      this.minusInputs = false;
    }
  }
}
