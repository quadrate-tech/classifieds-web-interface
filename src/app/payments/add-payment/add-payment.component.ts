import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {PaymentService} from '../payment.service'

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {
alert:boolean = false
  addPayment = new FormGroup({
    promoted_ad_id: new FormControl(''),
    payment_time: new FormControl(''),
    paid_amount: new FormControl(''),
    payment_date: new FormControl(''),
    payment_status: new FormControl('')
  })

  constructor(private payment:PaymentService) { }

  ngOnInit(): void {
  }
  collectPayment(){
    this.payment.savePayment(this.addPayment.value).subscribe((result)=>{
      this.alert = true
      this.addPayment.reset({})
    })
  }
  closeAlert(){
    this.alert = false
  }
}
