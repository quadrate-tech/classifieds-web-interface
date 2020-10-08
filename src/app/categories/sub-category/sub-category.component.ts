import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { SubCategory } from 'src/app/models/sub-category';
import { ParentCategoryService } from '../../services/parent-category.service';
import { SubCategoryService } from '../../services/sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css'],
})
export class SubCategoryComponent implements OnInit {
  category: SubCategory;
  constructor() {}

  ngOnInit(): void {
    this.category = new SubCategory();
  }
  addCategory() {}
}
