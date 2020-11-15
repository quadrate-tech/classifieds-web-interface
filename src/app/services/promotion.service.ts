import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Promotion} from '../models/promotion';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private promotion: Promotion[] = [];
  private promotionUpdated = new Subject<Promotion[]>();
  public selectedPromotion: Promotion = new Promotion(0, '', 0, 0, false);

  private promotionUrl = ' https://djangoad.herokuapp.com/api/promotion/';
  private header = {headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization' : 'Basic ' + btoa('qts-admin:QTSSuperUser')
  })};

  constructor(private http: HttpClient,
              private router: Router) { }

  public getPromotionUpdateListner(): Observable<Promotion[]> {
    return this.promotionUpdated.asObservable();
  }


  public getPromotion(): Promotion[] {
    this.http.get(this.promotionUrl, this.header ).subscribe(
      res => {
        console.log(res);
        this.promotion = res as Promotion[];
        this.promotionUpdated.next([...this.promotion]);
        console.log(this.promotion);
      },
      err => console.log(err)
    );
    return [...this.promotion];
  }

  public addPromotion(promotion: Promotion): void {
    this.promotion.push(promotion);
    this.http.post<any>(this.promotionUrl, promotion, {
      headers: {'Content-Type': 'application/json'}
    }).subscribe(
      res => window.alert('project added successfully!'),
      err => console.log(err)
    );
    this.promotionUpdated.next([...this.promotion]);
  }

  public deletePromotion(_id): void {
    this.http.delete<any>(this.promotionUrl  + _id + '/', this.header ).subscribe(
      res => {
        this.getPromotion();
        this.router.navigate(['/promotedAd']);
      },
      err => console.log(err)
    );
  }


  public selected(id){
    return this.http.get(this.promotionUrl + id + '/', this.header);
  }

  public updatePromotion(promotion: Promotion): void {
    console.log(promotion);
    this.http.put<any>(this.promotionUrl + promotion.promotion_id + '/', promotion, this.header)
      .subscribe(
        res => {
          window.alert('project updated successfully');
          this.getPromotion();
        },
        err => console.log(err)
      );
  }
}
