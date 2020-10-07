import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeonboardingComponent } from '../employeeonboarding/employeeonboarding.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanDeactivate<EmployeeonboardingComponent> {

  constructor(private snakBar: MatSnackBar) {

  }

  canDeactivate(
    component: EmployeeonboardingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.onboardingForm.pristine) {
      this.snakBar.open('You have some unsaved changes, please submit or reset form');
      return false;
    }
    return true;
  }

}
