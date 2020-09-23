import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CreateParentCategoryComponent } from './create-parent-category/create-parent-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { UserComponent } from './user/user.component';
import { CreateAdComponent } from './create-ad/create-ad.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'me/subCategory', component: SubCategoryComponent},
  {path: 'me/ad', component: CreateAdComponent},
  {path: 'me/parentCategory',component: CreateParentCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
