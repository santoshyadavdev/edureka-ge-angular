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

  constructor(private testService: TestService,
    private adminService: AdminService) {
    console.log(testService.getEndPoint());
    console.log(testService.getLocalStorage());
  }

  ngOnInit() {
    console.log(this.adminService.getAdminDetails());
    console.log(this.adminService.logout())
  }

}
