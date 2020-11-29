import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SubCategoryService } from '../../services/sub-category.service';
import { AdTypeService } from '../../services/ad-type.service';
import { CityService } from '../../services/city.service';
import { Ad } from '../../models/ad';
import { AdService } from '../../services/ad.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.css'],
})
export class EditAdComponent implements OnInit {
  ad_id: number;
  ad: Ad;
  cities: Array<object>;
  types: Array<object>;
  subCategories: Array<object>;

  constructor(
    private activeRouter: ActivatedRoute,
    private SubCategoryService: SubCategoryService,
    private AdTypeService: AdTypeService,
    private CityService: CityService,
    private AdService: AdService
  ) {
    this.ad = new Ad();
  }
  editAdForm = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    subCategory: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.ad_id = this.activeRouter.snapshot.params['id'];
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
    return this.editAdForm.get('name');
  }
  get price() {
    return this.editAdForm.get('price');
  }
  get images() {
    return this.editAdForm.get('images') as FormArray;
  }
  get city() {
    return this.editAdForm.get('city');
  }
  get type() {
    return this.editAdForm.get('type');
  }
  get subCategory() {
    return this.editAdForm.get('subCategory');
  }
  editAd() {
    if (this.editAdForm.hasError) return;

    this.ad = this.editAdForm.value;
    console.log(this.AdService.createAd(this.ad));
  }
}
