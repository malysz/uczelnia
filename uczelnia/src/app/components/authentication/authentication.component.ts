import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  signUp() {
    this.authenticationService.signUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.authenticationService.singIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authenticationService.signOut();
  }

}
