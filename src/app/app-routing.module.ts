import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsDetailsComponent } from './comments/comments-details/comments-details.component';
import { CommentsComponent } from './comments/comments.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeonboardingComponent } from './employee/employeeonboarding/employeeonboarding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/onboarding', component: EmployeeonboardingComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'comments/:commentid', component: CommentsDetailsComponent },
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
