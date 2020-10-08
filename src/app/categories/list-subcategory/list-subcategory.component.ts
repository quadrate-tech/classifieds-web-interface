import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubCategory } from 'src/app/models/sub-category';

@Component({
  selector: 'app-list-subcategory',
  templateUrl: './list-subcategory.component.html',
  styleUrls: ['./list-subcategory.component.css'],
})
export class ListSubcategoryComponent implements OnInit {
  categories: SubCategory[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.categories = [
      { name: 'ArtSub', id: 1, parent_category: 1 },
      { name: 'FurnitureSub', id: 2, parent_category: 2 },
    ];
  }
  editCategory(id) {
    this.router.navigate([`/subCategories/edit/${id}`]);
  }
  deleteCategory(id) {}
}
