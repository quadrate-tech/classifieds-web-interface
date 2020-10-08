import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-ad-types',
  templateUrl: './manage-ad-types.component.html',
  styleUrls: ['./manage-ad-types.component.css'],
})
export class ManageAdTypesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  addType() {
    this.router.navigate(['/adType/add']);
  }
}
