import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'ge-employeeonboarding',
  templateUrl: './employeeonboarding.component.html',
  styleUrls: ['./employeeonboarding.component.css']
})
export class EmployeeonboardingComponent implements OnInit {

  nameFilter: FormControl;// = new FormControl('test');

  get pastExp() {
    return this.onboardingForm.get('pastExp') as FormArray;
  }

  onboardingForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.nameFilter = this.fb.control('');
    this.onboardingForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      address: this.fb.group({
        addr1: new FormControl(''),
        addr2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl('')
      }),
      pastExp: this.fb.array([
        this.fb.group({
          employer: new FormControl(''),
          fromDate: new FormControl(''),
          toDate: new FormControl(''),
          designation: new FormControl('')
        })
      ])
    })
  }

}
