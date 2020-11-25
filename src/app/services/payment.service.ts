import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Payment} from '../models/payment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private payments: Payment[] = [];
  private PaymentsUpdated = new Subject<Payment[]>();
  public selectedPayment: Payment = new Payment(0, 0, '0/0/0', 0, 0,true);


  private paymentUrl = ' https://djangoad.herokuapp.com/api/payment/';
  private header = {headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization' : 'Basic ' + btoa('qts-admin:QTSSuperUser')
  })};

  constructor(private http: HttpClient,
              private router: Router) { }

  public getPaymentUpdateListner(): Observable<Payment[]> {
    return this.PaymentsUpdated.asObservable();
  }


  public getPayment(): Payment[] {
    this.http.get(this.paymentUrl, this.header ).subscribe(
      res => {
        console.log(res);
        this.payments = res as Payment[];
        this.PaymentsUpdated.next([...this.payments]);
        console.log(this.payments);
      },
      err => console.log(err)
    );
    return [...this.payments];
  }

  public addPayment(payments: Payment): void {
    this.payments.push(payments);
    this.http.post<any>(this.paymentUrl, payments, {
      headers: {'Content-Type': 'application/json'}
    }).subscribe(
      res => window.alert('project added successfully!'),
      err => console.log(err)
    );
    this.PaymentsUpdated.next([...this.payments]);
  }

  public deletePayment(_id): void {
    this.http.delete<any>(this.paymentUrl  + _id + '/', this.header ).subscribe(
      res => {
        this.getPayment();
        this.router.navigate(['/payment']);
      },
      err => console.log(err)
    );
  }


  public selected(id): void {
    this.http.get(this.paymentUrl + id + '/', this.header).subscribe(
      res => {
        console.log(res);
        this.selectedPayment =  res as Payment;
      },
      err => console.log(err)
    );
  }

  public updatePayment(payments: Payment): void {
    console.log(payments);
    this.http.put<any>(this.paymentUrl + payments.id + '/', payments, this.header)
      .subscribe(
        res => {
          window.alert('project updated successfully');
          this.getPayment();
        },
        err => console.log(err)
      );
  }
}
