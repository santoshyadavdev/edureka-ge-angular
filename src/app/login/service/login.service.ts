import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  role = '';

  constructor() { }

  login(userName: string, password: string) {
    if (userName === 'Admin' && password === 'Admin') {
      this.isLoggedIn = true;
      this.role = 'Admin';
    }
    if (userName === 'test' && password === 'test') {
      this.isLoggedIn = true;
      this.role = 'User';
    }
    sessionStorage.setItem('loginStatus', this.isLoggedIn.toString());
    sessionStorage.setItem('role', this.role.toString());
    return this.isLoggedIn;
  }
}
