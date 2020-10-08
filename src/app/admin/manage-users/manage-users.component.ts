import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
})
export class ManageUsersComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  addUser() {
    this.router.navigate(['/users/add']);
  }
}
