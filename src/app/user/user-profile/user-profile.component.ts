import { Component, OnInit } from '@angular/core';

interface User {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user = {
    name: 'Nada Abdelmaboud',
    ads: [1, 2, 3, 4, 5, 6],
  };
  isUser = true;
  constructor() {}

  ngOnInit(): void {}
}
