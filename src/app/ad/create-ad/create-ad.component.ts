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
  user = {
    name: 'Nada Abdelmaboud',
  };
  ad: Ad;
  cities: Array<object>;
  types: Array<object>;
  subCategories: Array<object>;

  constructor(
    private SubCategoryService: SubCategoryService,
    private AdTypeService: AdTypeService,
    private CityService: CityService,
    private AdService: AdService
  ) {
    this.ad = new Ad();
  }
  createAdForm = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    subCategory: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.types = this.AdTypeService.getAdType();
    this.cities = this.CityService.getCities();
    this.subCategories = this.SubCategoryService.getSubCategories();
    let inputFile = document.getElementById('customFile');
    inputFile.addEventListener('change', function () {
      var fullPath = (<HTMLInputElement>document.getElementById('customFile'))
        .value;
      if (fullPath) {
        var startIndex =
          fullPath.indexOf('\\') >= 0
            ? fullPath.lastIndexOf('\\')
            : fullPath.lastIndexOf('/');
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
          filename = filename.substring(1);
        }

        let label = document.getElementById('inputLabel');
        label.innerHTML = filename;
      }
    });
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
    if (this.createAdForm.hasError) return;

    this.ad = this.createAdForm.value;
    console.log(this.AdService.createAd(this.ad));
  }
}
