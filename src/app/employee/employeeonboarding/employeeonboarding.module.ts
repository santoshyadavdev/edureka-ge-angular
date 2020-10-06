import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeonboardingRoutingModule } from './employeeonboarding-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
