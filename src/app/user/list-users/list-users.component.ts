import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  //should be get from service
  users = [
    { name: 'Nada', joinedAt: '2-1-2000', id: 1 ,email:"nada@gmail.com"},
    { name: 'Nada', joinedAt: '2-1-2000', id: 1,email:"nada@gmail.com" },
    { name: 'Nada', joinedAt: '2-1-2000', id: 1 ,email:"nada@gmail.com"},
    { name: 'Nada', joinedAt: '2-1-2000', id: 1 ,email:"nada@gmail.com"},
    { name: 'Nada', joinedAt: '2-1-2000', id: 1 ,email:"nada@gmail.com"},
  ];
  constructor() {}

  ngOnInit(): void {}
  deleteUser(user) {}
}
