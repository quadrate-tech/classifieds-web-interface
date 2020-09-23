import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment.service'

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.css']
})
export class EditPaymentComponent implements OnInit {
  alert:boolean=false;
  editPayment = new FormGroup({
    promoted_ad_id: new FormControl(''),
    payment_time: new FormControl(''),
    paid_amount: new FormControl(''),
    payment_date: new FormControl(''),
    payment_status: new FormControl('')
  })
  constructor(private router: ActivatedRoute, private payment: PaymentService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.payment.getCurrentPayment(this.router.snapshot.params.id).subscribe((result) => {
      this.editPayment = new FormGroup({
        promoted_ad_id: new FormControl(result['promoted_ad_id']),
        payment_time: new FormControl(result['payment_time']),
        paid_amount: new FormControl(result['paid_amount']),
        payment_date: new FormControl(result['payment_date']),
        payment_status: new FormControl(result['payment_status'])
      })
    }
    )
  }
  collection()
  {
    console.warn(this.editPayment.value);
    this.payment.updatePayment(this.router.snapshot.params.id, this.editPayment.value).subscribe((result)=>{
      this.alert=true
    })
  }
  closeAlert()
  {
    this.alert=false
  }
}
