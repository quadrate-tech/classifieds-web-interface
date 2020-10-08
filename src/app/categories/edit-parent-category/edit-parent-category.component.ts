import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParentCategory } from 'src/app/models/parent-category';

@Component({
  selector: 'app-edit-parent-category',
  templateUrl: './edit-parent-category.component.html',
  styleUrls: ['./edit-parent-category.component.css'],
})
export class EditParentCategoryComponent implements OnInit {
  category_id: number;
  category: ParentCategory;
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.category = new ParentCategory();
    this.category_id = this.activeRouter.snapshot.params['id'];
  }
  editCategory() {}
}
