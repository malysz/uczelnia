import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import Persistence = firebase.auth.Auth.Persistence;
import * as firebase from 'firebase';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.User>;
  alertFlag: boolean;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, private userService: UserService) {
    this.userData = angularFireAuth.authState;
  }

  signUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up new user! ', res);
        this.alertFlag = false;
        this.userService.addUser(email);
        this.router.navigate(['/courses']);
      }).catch(err => {
        console.log('Something went wrong... ', err);
        this.alertFlag = true;
    });
  }

  singIn(email: string, password: string) {
    this.angularFireAuth.auth.setPersistence(Persistence.SESSION).then(() => {
      this.angularFireAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log('Successfully signed in!');
          this.alertFlag = false;
          this.router.navigate(['/courses']);
        }).catch(err => {
          console.log('Something went wrong... ', err);
          this.alertFlag = true;
        });
    });
  }

  signOut() {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    if (this.angularFireAuth.auth.currentUser !== null) {
      return true;
    }
  }

  isAdmin(): boolean {
    if (this.angularFireAuth.auth.currentUser !== null) {
      if (this.userService.getUser(this.angularFireAuth.auth.currentUser.email).role === 'admin') {
        return true;
      }
    }
  }

  getCurrentEmail() {
    return this.angularFireAuth.auth.currentUser.email;
  }
}
