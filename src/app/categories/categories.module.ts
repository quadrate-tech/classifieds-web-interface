import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateParentCategoryComponent } from './create-parent-category/create-parent-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { EditSubcategoryComponent } from './edit-subcategory/edit-subcategory.component';
import { ListSubcategoryComponent } from './list-subcategory/list-subcategory.component';
import { EditParentCategoryComponent } from './edit-parent-category/edit-parent-category.component';
import { ListParentCategoryComponent } from './list-parent-category/list-parent-category.component';
@NgModule({
  declarations: [
    CreateParentCategoryComponent,
    SubCategoryComponent,
    EditSubcategoryComponent,
    ListSubcategoryComponent,
    EditParentCategoryComponent,
    ListParentCategoryComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    CreateParentCategoryComponent,
    SubCategoryComponent,
    EditSubcategoryComponent,
    ListSubcategoryComponent,
    EditParentCategoryComponent,
    ListParentCategoryComponent,
  ],
})
export class CategoriesModule {}
