import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  alert: boolean = false;
  editUser = new FormGroup({
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
