import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  logOut() {
    this.router.navigateByUrl('core/login');
    localStorage.removeItem('token');
  }
  addAbout() {
    this.router.navigateByUrl('aboutus');
  }
  addContact() {
    this.router.navigateByUrl('contactus');

  }
  addHome() {
    this.router.navigateByUrl('/');

  }
  
}
