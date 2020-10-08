import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-ad',
  templateUrl: './manage-ad.component.html',
  styleUrls: ['./manage-ad.component.css'],
})
export class ManageAdComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  addAd() {
    this.router.navigate(['/ad/create']);
  }
}
