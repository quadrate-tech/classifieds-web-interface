import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SubCategoryService } from '../../services/sub-category.service';
import { AdTypeService } from '../../services/ad-type.service';
import { CityService } from '../../services/city.service';
import { Ad } from '../../models/ad';
import { AdService } from '../../services/ad.service';
@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css'],
})
export class CreateAdComponent implements OnInit {
  ad: Ad;
  cities: Array<object>;
  types: Array<object>;
  subCategories: Array<object>;
  hasImage: Boolean;
  invalidImage: Boolean;
  constructor(
    private SubCategoryService: SubCategoryService,
    private AdTypeService: AdTypeService,
    private CityService: CityService,
    private AdService: AdService
  ) {
    this.ad = new Ad();
    this.hasImage = true;
    this.invalidImage = false;
  }
  createAdForm = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    images: new FormArray([], Validators.required),
    subCategory: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.types = this.AdTypeService.getTypes();
    this.cities = this.CityService.getCities();
    this.subCategories = this.SubCategoryService.getSubCategories();
  }
  get name() {
    return this.createAdForm.get('name');
  }
  get price() {
    return this.createAdForm.get('price');
  }
  get images() {
    return this.createAdForm.get('images') as FormArray;
  }
  get city() {
    return this.createAdForm.get('city');
  }
  get type() {
    return this.createAdForm.get('type');
  }
  get subCategory() {
    return this.createAdForm.get('subCategory');
  }
  createAd() {
    if (this.images.length == 0) {
      this.hasImage = false;
      return;
    }
    if (this.createAdForm.hasError) return;

    this.ad = this.createAdForm.value;
    console.log(this.AdService.createAd(this.ad));
  }
  addImage(image: HTMLInputElement) {
    if (image.value.length < 10) {
      this.invalidImage = true;
      this.hasImage = true;
      return;
    }

    this.images.push(new FormControl(image.value));
    image.value = '';
    this.invalidImage = false;
    this.hasImage = true;
  }
  removeImage(image: FormControl) {
    let index = this.images.controls.indexOf(image);
    this.images.removeAt(index);
  }
}
