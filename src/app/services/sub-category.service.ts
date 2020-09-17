import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubCategoryService {
  sub_categories = [
    { id: 1, name: 'job' },
    { id: 2, name: 'rent' },
    { id: 3, name: 'sale' },
  ];
  adSubCategory: number;
  constructor() {
    this.adSubCategory = this.sub_categories[0].id;
  }
  getAdSubCategory() {
    return this.adSubCategory;
  }
  setAdSubCategory(subCategory) {
    this.adSubCategory = subCategory;
  }
  getSubCategories(parentCategory) {}
}
