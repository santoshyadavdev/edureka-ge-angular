import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
// import { Employee } from './employee/employee';
// import { EmployeeService } from './employee/services/employee.service';
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
export class AppComponent implements OnInit {
  title = 'edureka-app';

  role = 'User'; // User

  constructor(
    // @SkipSelf() private employeeService: EmployeeService,
    @Optional() private loggerService: LoggerService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationStart) {
        console.log('Your navigation is in progress');
      }
      if (evt instanceof NavigationEnd) {
        console.log('Your navigation is completed');
      }
    });
  }

  // addEmployee() {
  //   const employee: Employee = {
  //     id: 6,
  //     dob: new Date('1-Jan-2005'),
  //     email: 'test5@gmail.com',
  //     name: 'Suchite',
  //     salary: 50000
  //   };

  //   this.employeeService.addEmployee(employee);
  //   if (this.loggerService) {
  //     this.loggerService.log('New Employee added');
  //   }
  // }
}
