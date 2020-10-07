import { Component, OnInit } from '@angular/core';
import {
  FormArray, FormBuilder,
  FormControl, FormGroup, Validators
} from '@angular/forms';
import { CustomValidator } from './custom.validator';

@Component({
  selector: 'ge-employeeonboarding',
  templateUrl: './employeeonboarding.component.html',
  styleUrls: ['./employeeonboarding.component.css']
})
export class EmployeeonboardingComponent implements OnInit {

  nameFilter: FormControl; // = new FormControl('test');

  get pastExp() : FormArray {
    return this.onboardingForm.get('pastExp') as FormArray;
  }

  onboardingForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.nameFilter = this.fb.control('');
    this.onboardingForm = this.fb.group({
      // name: new FormControl({ value: 'fsdfjhg', disabled: true }, [Validators.required]),
      name: new FormControl('', {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
          CustomValidator.validateName
        ]
      }),
      password: [''],
      confirmPassword: [],
      email: ['', [Validators.required, Validators.email]],
      dob: new FormControl(''),
      tnc: new FormControl('', Validators.requiredTrue),
      address: this.fb.group({
        addr1: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
        addr2: new FormControl('', CustomValidator.specialCharValidator(['?', '@'])),
        city: new FormControl(''),
        pin: new FormControl('')
      }),
      pastExp: this.fb.array([
        this.buildForm()
      ])
    }, { updateOn: 'blur', validators: [CustomValidator.passwordValidator] });
  }

  addExp() : void {
    this.pastExp.push(this.buildForm());
  }

  removeExp(i: number): void {
    this.pastExp.removeAt(i);
  }

  clearExp() {
    this.pastExp.clear();
  }


  private buildForm() {
    return this.fb.group({
      employer: new FormControl('', Validators.required),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      designation: new FormControl('')
    });
  }

  addPassport() {
    this.onboardingForm.addControl('passport', new FormControl(''));
  }

  addEmployee() {
    // api calls
    this.onboardingForm.getRawValue();
    this.resetForm();
  }

  private resetForm() {
    this.onboardingForm.reset({
      name: '',
      password: '',
      confirmPassword: '',
      email: '',
      tnc: '',
      address: {
        addr1: '',
        addr2: '',
        city: '',
        pin: ''
      },
      pastExp: []
    });
  }
}
