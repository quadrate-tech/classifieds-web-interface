import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  isLogged: boolean;
  ngOnInit(): void {
    this.isLogged = false; //should call auth service isLogges function
  }
  setActive(e) {
    console.log(e);
    let anchors = document.getElementsByTagName('a');
    for (let i = 0; i < anchors.length; i++) {
      if (anchors[i].classList.contains('active')) {
        anchors[i].classList.remove('active');
      }
    }
    e.target.classList.add('active');
  }
}
