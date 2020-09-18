import { Component, OnInit } from '@angular/core';

interface User {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users: User[] = [
    {value: 'admin-0', viewValue: 'Admin'},
    {value: 'manager-1', viewValue: 'Manager'},
    {value: 'user-2', viewValue: 'User'}
  ];
  hide = true;

}
