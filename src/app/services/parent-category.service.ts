import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParentCategoryService {
  parentCategories = [
    { id: 1, name: 'books' },
    { id: 2, name: 'furniture' },
    { id: 3, name: 'doors' },
  ];
  constructor() {}
  getParentCategories() {
    return this.parentCategories;
  }
  checkUnique(category): Boolean {
    for (let i = 0; i < this.parentCategories.length; i++) {
      if (
        category.id == this.parentCategories[i].id ||
        category.name == this.parentCategories[i].name
      ) {
        return false;
      }
    }
    return true;
  }
  createParentCategory(category) {
    this.parentCategories.push(category);
    return this.parentCategories;
  }
}
