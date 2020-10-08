import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-payments',
  templateUrl: './manage-payments.component.html',
  styleUrls: ['./manage-payments.component.css'],
})
export class ManagePaymentsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  addPayment() {
    this.router.navigate(['/payment/add']);
  }
}
