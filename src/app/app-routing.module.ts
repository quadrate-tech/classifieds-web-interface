import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPaymentComponent} from './payments/add-payment/add-payment.component';
import {ListPaymentComponent} from './payments/list-payment/list-payment.component';
import {EditPaymentComponent} from './payments/edit-payment/edit-payment.component';
import { CreateParentCategoryComponent } from './create-parent-category/create-parent-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { UserComponent } from './user/user.component';
import { CreateAdComponent } from './create-ad/create-ad.component';

const routes: Routes = [
  {
    component: AddPaymentComponent,
    path:'add'
  },
  {
    component: ListPaymentComponent,
    path:'list'
  },
  {
    component: EditPaymentComponent,
    path:'edit/:id'
  },
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
