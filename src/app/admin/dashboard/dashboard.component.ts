import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  listComponents = {
    users: false,
    categories: false,
    payments: false,
    promotion: false,
    promotedAd: false,
    cities: false,
  };
  constructor() {}

  ngOnInit(): void {
    this.listComponents['users'] = true;
  }
  offAll() {
    this.listComponents['users'] = false;
    this.listComponents['categories'] = false;
    this.listComponents['payments'] = false;
    this.listComponents['promotion'] = false;
    this.listComponents['promotedAd'] = false;
    this.listComponents['cities'] = false;
  }
  setComponent(component) {
    this.offAll();
    this.listComponents[component] = true;
  }
}
