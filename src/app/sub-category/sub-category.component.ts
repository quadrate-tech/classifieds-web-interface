import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { ParentCategoryService } from '../services/parent-category.service';
import { SubCategoryService } from '../services/sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css'],
})
export class SubCategoryComponent implements OnInit {
  constructor(
    private ParentCategoryService: ParentCategoryService,
    private SubCategoryService: SubCategoryService
  ) {}
  parents: Array<object>;
  subCategoryForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    parent: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.parents = this.ParentCategoryService.getParentCategories();
  }
  get id() {
    return this.subCategoryForm.get('id');
  }
  get name() {
    return this.subCategoryForm.get('name');
  }
  get parent() {
    return this.subCategoryForm.get('parent');
  }
  createCategory() {
    this.SubCategoryService.createSubCategory(this.subCategoryForm.value);

    this.subCategoryForm.reset('');
  }
}
