import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPaymentComponent} from './payments/add-payment/add-payment.component';
import {ListPaymentComponent} from './payments/list-payment/list-payment.component';
import {EditPaymentComponent} from './payments/edit-payment/edit-payment.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
