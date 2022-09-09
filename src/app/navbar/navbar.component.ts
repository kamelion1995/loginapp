import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public logedIn=false;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
 
    this.logedIn=this.loginService.isLoggedIn();

  }

  logoutUser(){
    this.logedIn=this.loginService.logout();
    location.reload();
  }

}
