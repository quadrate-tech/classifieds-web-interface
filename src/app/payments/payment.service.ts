import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'
})
export class PaymentService {
   url = 'http://127.0.0.1:8000/api/payment';

  constructor(private http: HttpClient) { }
  getList()
  {
    return this.http.get(this.url);
  }
  savePayment(data)
  {
    return this.http.post(this.url, data)
  }
  deletePayment(id)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentPayment(id)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updatePayment(id, data)
  {
    return this.http.put(`${this.url}/${id}`, data)
  }
}
