import { Injectable } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  constructor(private loginService: LoginService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const loginStatus = sessionStorage.getItem('loginStatus') ? true : false;
    if (loginStatus) {
      return true;
    }
    console.log(state.url);
    return this.router.navigate(['/login'], { queryParams: { returnUrl: state.url.replace('/', '') } });
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (state.url === '/comments/add/comment') {
      return this.loginService.role === 'Admin';
    }
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const loginStatus = sessionStorage.getItem('loginStatus') ? true : false;
      if (loginStatus) {
        return true;
      }
      return false; // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url.replace('/', '') } });
  }

}
