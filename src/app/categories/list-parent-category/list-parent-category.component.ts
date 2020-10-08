import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentCategory } from 'src/app/models/parent-category';

@Component({
  selector: 'app-list-parent-category',
  templateUrl: './list-parent-category.component.html',
  styleUrls: ['./list-parent-category.component.css'],
})
export class ListParentCategoryComponent implements OnInit {
  categories: ParentCategory[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.categories = [
      { category_name: 'Art', category_id: 1, is_deleted: false },
      { category_name: 'Furniture', category_id: 2, is_deleted: true },
    ];
  }
  editCategory(id) {
    this.router.navigate([`/parentCategories/edit/${id}`]);
  }
  deleteCategory(id) {}
}
