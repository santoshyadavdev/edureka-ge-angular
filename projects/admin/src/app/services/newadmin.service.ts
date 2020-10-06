import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';

@Injectable()
export class NewadminService extends AdminService {

  constructor() {
    super();
    console.log('new instance of new login service');
  }

  getAdminDetails() {
    return {
      name: 'Vidya',
      department: 'IT'
    }
  }

}
