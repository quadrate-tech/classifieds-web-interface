import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  url = 'http://127.0.0.1:8000/api/promotion';

  constructor(private http: HttpClient) { }

  getList()
  {
    return this.http.get(this.url);
  }

  savePromotion(data)
  {
    return this.http.post(this.url, data);
  }

  deletePromotion(id)
  {
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentPromotion(id)
  {
    return this.http.get(`${this.url}/${id}`);
  }

  updatePromotion(id, data)
  {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
