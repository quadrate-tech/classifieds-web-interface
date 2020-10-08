import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategory } from 'src/app/models/sub-category';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.css'],
})
export class EditSubcategoryComponent implements OnInit {
  category_id: number;
  category: SubCategory;
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.category = new SubCategory();
    this.category_id = this.activeRouter.snapshot.params['id'];
  }
  editCategory() {}
}
