import { Injectable } from '@angular/core';
import { NewadminService } from './newadmin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getAdminDetails() {
    return {
      name: 'Anoop',
      department: 'IT'
    }
  }

  getAllAdmin() {}
  logout() {
    return 'logout';
  }
}
