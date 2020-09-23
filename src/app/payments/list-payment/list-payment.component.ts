import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../payment.service';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.css']
})
export class ListPaymentComponent implements OnInit {

  constructor(private payment:PaymentService) { }
  paymentList:any=[];
  ngOnInit(): void {
    this.payment.getList().subscribe((result)=>{
      this.paymentList=result
    })
  }
  deletePayment(item){
    this.paymentList.splice(item-1,1)
    this.payment.deletePayment(item).subscribe((result)=>{
    })
  }

}
