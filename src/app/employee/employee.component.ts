import { Component, DoCheck, HostBinding, OnInit, Self, ViewEncapsulation } from '@angular/core';
import { last, takeLast } from 'rxjs/operators';
import { LoggerService } from '../logger.service';
import { ProductService } from '../product/services/product.service';
import { Employee } from './employee';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'ge-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  @HostBinding('class') class = 'ge-employee';

  employees: Employee[];
  selectedEmployee: Employee;

  // employeeService = new EmployeeService();

  constructor(@Self() private employeeService: EmployeeService,
              private productService: ProductService,
              private loggerService: LoggerService) { }

  cart$ = this.productService.getProductCart();
  // .pipe(
  //   // takeLast(1)
  // );
  ngOnInit(): void {
    this.employees = this.employeeService.getEmployeeList();
  }

  // ngDoCheck() {
  //   console.log('Do check is called');
  // }

  addEmployee() {
    const employee: Employee = {
      id: 5,
      dob: new Date('1-Jan-2005'),
      email: 'test5@gmail.com',
      name: 'Uma',
      salary: 50000
    };

    // this.employees.push(employee);
    // this.employees = [...this.employees, employee];
    this.employeeService.addEmployee(employee);
  }

  getSelectedEmployee(emp: Employee) {
    this.selectedEmployee = emp;
  }

}
