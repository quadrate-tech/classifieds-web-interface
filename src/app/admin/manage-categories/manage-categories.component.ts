import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css'],
})
export class ManageCategoriesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  addCategory() {
    this.router.navigate(['/parentCategories/add']);
  }
}
