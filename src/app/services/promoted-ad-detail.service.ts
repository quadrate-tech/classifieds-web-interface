import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {PromotedAdDetails} from '../models/promoted-ad-details.model';


@Injectable({
  providedIn: 'root'
})
export class PromotedAdDetailService {
  private promotedAdDetails: PromotedAdDetails[] = [];
  private PromotedAdDetailsUpdated = new Subject<PromotedAdDetails[]>();
  public selectedPromotedAdDetails: PromotedAdDetails = new PromotedAdDetails(0, 0, 0, '00/00/0000', 'new',false);

  private promotedAdUrl = ' https://djangoad.herokuapp.com/api/promoted_ad_detail/';
  private header = {headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization' : 'Basic ' + btoa('qts-admin:QTSSuperUser')
  })};

  constructor(private http: HttpClient,
              private router: Router) { }

  public getPromotedAdUpdateListner(): Observable<PromotedAdDetails[]> {
    return this.PromotedAdDetailsUpdated.asObservable();
  }


  public getPromotedAd(): PromotedAdDetails[] {
    this.http.get(this.promotedAdUrl, this.header ).subscribe(
      res => {
        console.log(res);
        this.promotedAdDetails = res as PromotedAdDetails[];
        this.PromotedAdDetailsUpdated.next([...this.promotedAdDetails]);
        console.log(this.promotedAdDetails);
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


  public selected(id): void {
    this.http.get(this.promotedAdUrl + id + '/', this.header).subscribe(
      res => {
        console.log(res);
        this.selectedPromotedAdDetails = res;
      },
      err => console.log(err)
    );
  }

  public updatePromotedAd(promotedAdDetails: PromotedAdDetails): void {
    console.log(promotedAdDetails);
    this.http.post<any>(this.promotedAdUrl + promotedAdDetails.pa_ad_id, promotedAdDetails)
      .subscribe(
        res => {
          window.alert('project updated successfully');
          this.getPromotedAd();
        },
        err => console.log(err)
      );
  }
}
