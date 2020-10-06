import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsAddComponent } from './comments/comments-add/comments-add.component';
import { CommentsDetailsComponent } from './comments/comments-details/comments-details.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentdetailsGuard } from './comments/guards/commentdetails.guard';
import { CommentsresolveGuard } from './comments/guards/commentsresolve.guard';
import { AuthGuard } from './guards/auth.guard';
// import { EmployeeComponent } from './employee/employee.component';
// import { EmployeeonboardingComponent } from './employee/employeeonboarding/employeeonboarding.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'employee',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
  // { path: 'employee/onboarding', component: EmployeeonboardingComponent },
  {
    path: 'comments', component: CommentsComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    resolve: {
      commentList: CommentsresolveGuard
    },
    children: [
      {
        path: ':commentid', component: CommentsDetailsComponent,
        resolve: {
          details: CommentdetailsGuard
        }
      },
      { path: 'add/comment', component: CommentsAddComponent }
    ]
  },
  // { path: 'comments/:commentid', component: CommentsDetailsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
