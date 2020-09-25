import { Component, Optional, SkipSelf } from '@angular/core';
import { Employee } from './employee/employee';
import { EmployeeService } from './employee/services/employee.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'ge-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from
  //   template!</h1> <br>
  //   This is new line`,
  // styles: ['h1 { color: steelblue; }'],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edureka-app';

  role= 'User'; // User

  constructor(@SkipSelf() private employeeService: EmployeeService,
    @Optional() private loggerService: LoggerService) {

    }

  addEmployee() {
    const employee: Employee = {
      id: 6,
      dob: new Date('1-Jan-2005'),
      email: 'test5@gmail.com',
      name: 'Suchite',
      salary: 50000
    };

    this.employeeService.addEmployee(employee);
    if(this.loggerService) {
      this.loggerService.log('New Employee added');
    }
  }
}
