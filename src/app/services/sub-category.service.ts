import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubCategoryService {
  subCategories = [
    { id: 1, name: 'books' },
    { id: 2, name: 'furniture' },
    { id: 3, name: 'doors' },
  ];
  adSubCategory: number;
  constructor() {
    this.adSubCategory = this.subCategories[0].id;
  }
  getAdSubCategory() {
    return this.adSubCategory;
  }
  setAdSubCategory(subCategory) {
    this.adSubCategory = subCategory;
  }
  getSubCategories() {
    return this.subCategories;
  }
}
