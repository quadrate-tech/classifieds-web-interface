import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { ListPaymentComponent } from './list-payment/list-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';



@NgModule({
  declarations: [AddPaymentComponent, ListPaymentComponent, EditPaymentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    AddPaymentComponent,
    ListPaymentComponent,
    EditPaymentComponent
  ]
})
export class PaymentsModule { }
