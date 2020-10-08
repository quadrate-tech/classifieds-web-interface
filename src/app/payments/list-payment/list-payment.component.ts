import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.css'],
})
export class ListPaymentComponent implements OnInit {
  constructor(private payment: PaymentService, private router: Router) {}
  paymentList: any = [];
  ngOnInit(): void {
    this.payment.getList().subscribe((result) => {
      this.paymentList = result;
    });
  }
  editPayment(id) {
    this.router.navigate([`/payment/edit/${id}`]);
  }
  deletePayment(item) {
    this.paymentList.splice(item - 1, 1);
    this.payment.deletePayment(item).subscribe((result) => {});
  }
}
