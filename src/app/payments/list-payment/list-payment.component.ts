import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.css'],
})
export class ListPaymentComponent implements OnInit {
  payments: Payment[];
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.payments = [
      {id: 1, promoted_ad_id: 1, payment_date: '2020-10-10' , paid_amount: 2300, payment_time: 12.23, payment_status: true},
      {id: 2, promoted_ad_id: 2, payment_date: '2020-10-14' , paid_amount: 1340, payment_time: 1.20, payment_status: true},
      {id: 3, promoted_ad_id: 3, payment_date: '2020-10-15' , paid_amount: 3700, payment_time: 7.30, payment_status: true},
      {id: 4, promoted_ad_id: 3, payment_date: '2020-10-18' , paid_amount: 2000, payment_time: 11.00, payment_status: true},
    ];
  }
  editPayment(id) {
    this.router.navigate([`/payment/edit/${id}`]);
  }
  deletePayment(item) {
    {}
  }
}
