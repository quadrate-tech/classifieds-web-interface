import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  //should be get from service
  users = [
    { name: 'Nada', joinedAt: '2-1-2000', id: 1, email: 'nada@gmail.com' },
    { name: 'Nada', joinedAt: '2-1-2000', id: 1, email: 'nada@gmail.com' },
    { name: 'Nada', joinedAt: '2-1-2000', id: 1, email: 'nada@gmail.com' },
    { name: 'Nada', joinedAt: '2-1-2000', id: 1, email: 'nada@gmail.com' },
    { name: 'Nada', joinedAt: '2-1-2000', id: 1, email: 'nada@gmail.com' },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  editUser(id) {
    this.router.navigate([`users/edit/${id}`]);
  }
  deleteUser(user) {}
}
