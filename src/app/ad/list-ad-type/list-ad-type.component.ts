import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdType } from 'src/app/models/ad-type';
import {AdTypeService} from '../../services/ad-type.service';
@Component({
  selector: 'app-list-ad-type',
  templateUrl: './list-ad-type.component.html',
  styleUrls: ['./list-ad-type.component.css'],
})
export class ListAdTypeComponent implements OnInit {
  adTypes: AdType[];

  constructor(
    private adTypeService : AdTypeService,
    private router: Router
  ) {}
  adTypeList : any=[];
  ngOnInit(): void {
    this.adTypes = this.adTypeService.getAdTypes();
    console.log(this.adTypes);
    this.adTypeService.getAdTypeUpdateListner().subscribe((adTypes: AdType[]) => {
      this.adTypes = adTypes;
    });

  }
  editPromotion(id) {
    this.router.navigate([`/adType/edit/${id}`]);
  }
}
