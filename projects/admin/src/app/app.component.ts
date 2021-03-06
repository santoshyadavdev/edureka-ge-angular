import { Component, OnInit } from '@angular/core';
import { AdminService } from './services/admin.service';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin';

  adminDetails: any;
  apiEndpoint  = '';

  lists = ['test1', 'test2', 'test3'];

  constructor(private testService: TestService,
    private adminService: AdminService) {
    console.log(testService.getEndPoint());
    console.log(testService.getLocalStorage());
  }

  ngOnInit() {
    this.adminDetails = this.adminService.getAdminDetails();
    // console.log(this.adminService.logout());
    this.apiEndpoint = this.testService.getEndPoint();
  }

}
