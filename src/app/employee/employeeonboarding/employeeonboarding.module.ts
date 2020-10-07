import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmployeeonboardingRoutingModule } from './employeeonboarding-routing.module';
import { EmployeeonboardingComponent } from './employeeonboarding.component';


@NgModule({
  declarations: [EmployeeonboardingComponent],
  imports: [
    CommonModule,
    EmployeeonboardingRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule
  ]
})
export class EmployeeonboardingModule { }
