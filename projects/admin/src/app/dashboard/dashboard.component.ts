import { Component, OnInit } from '@angular/core';
import { NewadminService } from '../services/newadmin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: string= '';

  constructor(private newAdminService: NewadminService) { }

  ngOnInit(): void {
  }

}
