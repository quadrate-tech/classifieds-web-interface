import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  isLogged: boolean = false;
  ngOnInit(): void {
    if (localStorage.getItem('user') == 'logged') {
      this.isLogged = true; //should call auth service isLogges function
    }
  }
  logOut() {
    localStorage.removeItem('user');
  }
  setActive(e) {
    let anchors = document.getElementsByTagName('a');
    for (let i = 0; i < anchors.length; i++) {
      if (anchors[i].classList.contains('active')) {
        anchors[i].classList.remove('active');
      }
    }
    e.target.classList.add('active');
  }
}
