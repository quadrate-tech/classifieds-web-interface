import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  Form,
} from '@angular/forms';
import { ParentCategoryService } from '../../services/parent-category.service';

@Component({
  selector: 'app-create-parent-category',
  templateUrl: './create-parent-category.component.html',
  styleUrls: ['./create-parent-category.component.css'],
})
export class CreateParentCategoryComponent implements OnInit {
  constructor(private ParentCategoryService: ParentCategoryService) {}
  createParentCategoryForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });
  isUnique: Boolean;
  ngOnInit(): void {
    this.isUnique = true;
  }
  get id() {
    return this.createParentCategoryForm.get('id');
  }
  get name() {
    return this.createParentCategoryForm.get('name');
  }
  createCategory() {
    if (this.createParentCategoryForm.hasError) return;
    this.isUnique = this.ParentCategoryService.checkUnique(
      this.createParentCategoryForm.value
    );
    if (!this.isUnique) {
      return;
    }
    console.log(
      this.ParentCategoryService.createParentCategory(
        this.createParentCategoryForm.value
      )
    );
    this.createParentCategoryForm.reset('');
  }
}
