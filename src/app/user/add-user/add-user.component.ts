import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  alert: boolean = false;
  addUser = new FormGroup({
    user_id: new FormControl(''),
    join_time: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
  });
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {}
  collection() {}
  closeAlert() {}
}
