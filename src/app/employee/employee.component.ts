import { Component, DoCheck, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'ge-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class EmployeeComponent implements OnInit {

  @HostBinding('class') class = 'ge-employee';

  employees : Employee[] = [
    {
      id : 1 ,name : 'Ansad', dob : new Date('10-Feb-2000'), email : 'test1@test.com', salary : 12000
    },
    {
      id : 2 ,name : 'Vidya', dob : new Date('10-Feb-2001'), email : 'test2@test.com', salary : 13000
    },
    {
      id : 3 ,name : 'Tony', dob : new Date('10-Feb-2001'), email : 'test3@test.com', salary : 14000
    },
    {
      id : 4 ,name : 'Troy', dob : new Date('10-Feb-2002'), email : 'test4@test.com', salary : 15000
    }
  ];

  selectedEmployee: Employee;


  constructor() { }

  ngOnInit(): void {
  }

  // ngDoCheck() {
  //   console.log('Do check is called');
  // }

  addEmployee() {
    const employee : Employee = {
      id : 5,
      dob : new Date('1-Jan-2005'),
      email: 'test5@gmail.com',
      name: 'Uma',
      salary : 50000
    };

    // this.employees.push(employee);
    this.employees = [...this.employees, employee];
  }

  getSelectedEmployee(emp: Employee) {
    this.selectedEmployee = emp;
  }

}
