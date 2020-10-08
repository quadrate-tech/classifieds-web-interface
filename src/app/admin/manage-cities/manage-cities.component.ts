import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-cities',
  templateUrl: './manage-cities.component.html',
  styleUrls: ['./manage-cities.component.css'],
})
export class ManageCitiesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  addCity() {
    this.router.navigate(['/city/add']);
  }
}
