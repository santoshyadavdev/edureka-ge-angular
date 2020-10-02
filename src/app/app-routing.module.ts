import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsAddComponent } from './comments/comments-add/comments-add.component';
import { CommentsDetailsComponent } from './comments/comments-details/comments-details.component';
import { CommentsComponent } from './comments/comments.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeonboardingComponent } from './employee/employeeonboarding/employeeonboarding.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'product', component: ProductComponent, data: {
      title: 'All Products',
      description: 'Collection of all products'
    }
  },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/onboarding', component: EmployeeonboardingComponent },
  {
    path: 'comments', component: CommentsComponent,
    children: [
      { path: ':commentid', component: CommentsDetailsComponent },
      { path: 'add/comment', component: CommentsAddComponent }
    ]
  },
  // { path: 'comments/:commentid', component: CommentsDetailsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
