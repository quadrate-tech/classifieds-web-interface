import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateParentCategoryComponent } from './create-parent-category/create-parent-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
@NgModule({
  declarations: [CreateParentCategoryComponent, SubCategoryComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [CreateParentCategoryComponent, SubCategoryComponent],
})
export class CategoriesModule {}
