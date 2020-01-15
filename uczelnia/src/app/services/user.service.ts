import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  url = 'http://localhost:4000/auth';

  constructor(private http: HttpClient) { }

  getUser(email) {
    this.getUsers();
    return this.users.filter(usr => usr.email === email).pop();
  }

  getUsers() {
    this.http.get<User[]>(this.url + '/users').subscribe(users => this.users = users );
    return this.users;
  }

  addUser(email) {
    const user = {
      email: email,
      role: 'student'
    };
    this.http.post(this.url + '/user', user).subscribe(value => {
        console.log('POST added user to db ', value);
        this.users.push(user);
      },
      response => {
        console.log('POST failed to add course to db');
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }
}
