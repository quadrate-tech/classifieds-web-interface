import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {PromotedAdDetails} from '../models/promoted-ad-details.model';


@Injectable({
  providedIn: 'root'
})
export class PromotedAdDetailService {
  private promotedAdDetails: PromotedAdDetails[] = [];
  private PromotedAdDetailsUpdated = new Subject<PromotedAdDetails[]>();
  selectedPromotedAdDetails: PromotedAdDetails = new PromotedAdDetails(0, 0, 0, '00/00/0000', false);

  private promotedAdUrl = 'http://localhost:8000/api/promotedAd';

  constructor(private http: HttpClient,
              private router: Router) { }

  public getPromotedAdUpdateListner(): Observable<PromotedAdDetails[]> {
    return this.PromotedAdDetailsUpdated.asObservable();
  }


  public getPromotedAd(): PromotedAdDetails[] {
    this.http.get(this.promotedAdUrl).subscribe(
      res => {
        this.promotedAdDetails = res as PromotedAdDetails[];
        this.PromotedAdDetailsUpdated.next([...this.promotedAdDetails]);
      },
      err => console.log(err)
    );
    return [...this.promotedAdDetails];
  }

  public addPromotedAd(promotedAdDetails: PromotedAdDetails): void {
    this.promotedAdDetails.push(promotedAdDetails);
    this.http.post<any>(this.promotedAdUrl, promotedAdDetails, {
      headers: {'Content-Type': 'application/json'}
    }).subscribe(
      res => window.alert('project added successfully!'),
      err => console.log(err)
    );
    this.PromotedAdDetailsUpdated.next([...this.promotedAdDetails]);
  }

  public deletePromotedAd(_id): void {
    this.http.delete<any>(this.promotedAdUrl  + _id, ).subscribe(
      res => {
        this.getPromotedAd();
        this.router.navigate(['/promotedAd']);
      },
      err => console.log(err)
    );
  }

  public selected(_id): void {
    this.selectedPromotedAdDetails = this.promotedAdDetails.find(_id);
  }

  public updatePromotedAd(promotedAdDetails: PromotedAdDetails): void {
    console.log(promotedAdDetails);
    this.http.post<any>(this.promotedAdUrl + promotedAdDetails.Pa_ad_id, promotedAdDetails)
      .subscribe(
        res => {
          window.alert('project updated successfully');
          this.getPromotedAd();
        },
        err => console.log(err)
      );
  }
}
