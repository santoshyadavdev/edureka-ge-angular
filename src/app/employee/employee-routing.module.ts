import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeonboardingComponent } from './employeeonboarding/employeeonboarding.component';
import { EmployeeGuard } from './guards/employee.guard';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  {
    path: 'onboarding',
    loadChildren: () => import('./employeeonboarding/employeeonboarding.module').then(m => m.EmployeeonboardingModule)
  }
  // {
  //   path: 'onboarding', component: EmployeeonboardingComponent,
  //   canDeactivate: [EmployeeGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
