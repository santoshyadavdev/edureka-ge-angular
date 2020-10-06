import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeonboardingComponent } from './employeeonboarding.component';

const routes: Routes = [
  {path: '', component : EmployeeonboardingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeonboardingRoutingModule { }
