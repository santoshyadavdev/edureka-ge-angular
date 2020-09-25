import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empList: Employee[] = [];
  constructor() {
    console.log('this is employee service instance');
  }

  getEmployeeList(): Employee[] {
    return this.empList = [
      {
        id: 1, name: 'Ansad', dob: new Date('10-Feb-2000'), email: 'test1@test.com', salary: 12000
      },
      {
        id: 2, name: 'Vidya', dob: new Date('10-Feb-2001'), email: 'test2@test.com', salary: 13000
      },
      {
        id: 3, name: 'Tony', dob: new Date('10-Feb-2001'), email: 'test3@test.com', salary: 14000
      },
      {
        id: 4, name: 'Troy', dob: new Date('10-Feb-2002'), email: 'test4@test.com', salary: 15000
      }
    ];
  }

  addEmployee(emp: Employee): void {
    this.empList.push(emp);
  }
}
