import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  Form,
} from '@angular/forms';
import { ParentCategory } from 'src/app/models/parent-category';
import { ParentCategoryService } from '../../services/parent-category.service';

@Component({
  selector: 'app-create-parent-category',
  templateUrl: './create-parent-category.component.html',
  styleUrls: ['./create-parent-category.component.css'],
})
export class CreateParentCategoryComponent implements OnInit {
  category: ParentCategory;
  constructor() {}

  ngOnInit(): void {
    this.category = new ParentCategory();
  }
  addCategory() {}
}
