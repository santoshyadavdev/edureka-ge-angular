import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;

  constructor() { }

  login(userName: string, password: string) {
    if (userName === 'Admin' && password === 'Admin') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
