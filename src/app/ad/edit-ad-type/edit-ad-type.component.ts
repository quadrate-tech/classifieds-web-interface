import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdType } from 'src/app/models/ad-type';
import {AdTypeService} from '../../services/ad-type.service';
@Component({
  selector: 'app-edit-ad-type',
  templateUrl: './edit-ad-type.component.html',
  styleUrls: ['./edit-ad-type.component.css'],
})
export class EditAdTypeComponent implements OnInit {
 public  adTypeId: number;
  public adType: AdType;
  public type='Add';
 

  constructor(private adTypeService: AdTypeService, 
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      if ( Number(params.get('id') ) != null) {
      this.adTypeService.selected(params.get('id')).subscribe(
        res => {
          this.adType =  res as AdType; 
        },
        err => console.log(err)
        );
        this.adType = this.adTypeService.selectedAdType;
        this.type = 'Edit'; 
      }else {

      this.adType = new AdType(0,'');
    }
  });
 }

 onAdd(): void {
  if (this.type === 'Add') {
    this.adTypeService.addAdType(this.adType);
    this.router.navigate(['/adType/add']);
  } else {
    console.log(this.adType);
    this.adTypeService.updateAdType(this.adType);
    this.router.navigate(['/adType/list']);

  }}}

