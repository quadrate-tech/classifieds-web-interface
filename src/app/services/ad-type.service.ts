import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { AdType } from '../models/ad-type';

//import {AdType} from '../models/ad-Type';
@Injectable({
  providedIn: 'root',
})


export class AdTypeService {

  private adType: AdType[] = [];
  private adTypeUpdated = new Subject<AdType[]>();
  public selectedAdType : AdType= new AdType(0,'')
  private adTypeUrl = ' https://djangoad.herokuapp.com/api/ad_type/';
  private header = {headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization' : 'Basic ' + btoa('qts-admin:QTSSuperUser')
  })};

  constructor(private http: HttpClient,
              private router: Router) { }
             
  public getAdTypeUpdateListner(): Observable<AdType[]> {      
    return this.adTypeUpdated .asObservable();   
  }
  public getAdType(): AdType[] {
    this.http.get(this.adTypeUrl, this.header ).subscribe(    
      res => {
        console.log(res);
        this.adType = res as AdType[];
        this.adTypeUpdated.next([...this.adType]);
        console.log(this.adType);
      },
      err => console.log(err)
    );
    return [...this.adType];
  }
  public addAdType(adType:AdType): void {
    this.adType.push(adType);
    this.http.post<any>(this.adTypeUrl, adType, {
      headers: {'Content-Type': 'application/json'}
    }).subscribe(
      res => window.alert('project added successfully!'),
      err => console.log(err)
    );
    this.adTypeUpdated.next([...this.adType]);
  }


  public deleteAdType(_id): void {
    window.alert('project deleted successfully');
    this.http.delete<any>(this.adTypeUrl + _id + '/', this.header ).subscribe(
      res => {
        this.getAdType();
        this.router.navigate(['/adType']);

      },
      err => console.log(err)
    );
  }



  public selected(id){
    return this.http.get(this.adTypeUrl + id + '/', this.header);
  }

  public updateAdType(adType: AdType): void {
    console.log(adType);
    this.http.put<any>(this.adTypeUrl + adType.adType_id + '/', adType, this.header)
      .subscribe(
        res => {
          window.alert('project updated successfully');
          this.getAdType();
        },
        err => console.log(err)
      );
  }
}


 