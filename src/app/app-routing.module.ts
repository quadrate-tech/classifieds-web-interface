import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateParentCategoryComponent } from './create-parent-category/create-parent-category.component';
const routes: Routes = [
  {
    path: 'me/parentCategory',
    component: CreateParentCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
