import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-subcategories',
  templateUrl: './manage-subcategories.component.html',
  styleUrls: ['./manage-subcategories.component.css'],
})
export class ManageSubcategoriesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  addCategory() {
    this.router.navigate(['/subCategories/add']);
  }
}
