import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  url = 'http://localhost:3000/promotion';

  constructor(private http: HttpClient) { }

  getList()
  {
    return this.http.get(this.url);
  }

  savePromotion(data)
  {
    return this.http.post(this.url, data);
  }

  deletePayment(id)
  {
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentPayment(id)
  {
    return this.http.get(`${this.url}/${id}`);
  }

  updatePayment(id, data)
  {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
