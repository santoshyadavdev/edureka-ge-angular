import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Config } from './appconfig';
import { AdminService } from './services/admin.service';
import { TestService } from './services/test.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeUiModule } from 'ge-ui';
import { FormsModule } from '@angular/forms';

let appComponent: AppComponent;

let adminService: AdminService;

class MockTestSevice {
  getEndPoint() {
    return 'abc.com'
  }

  getLocalStorage() {
    return {};
  }
}

class MockAdminService {
  getAdminDetails() {
    return {
      name: 'Anoop',
      department: 'IT'
    }
  }
}
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        GeUiModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent
      ],
      providers: [
        { provide: TestService, useClass: MockTestSevice },
        { provide: AdminService, useClass: MockAdminService }
      ]
    }).compileComponents();
  });
  // beforeEach(() => {
  //   const config: Config = {
  //     apiEndpoint: 'abc.com',
  //     title: 'test'
  //   };
  //   let locaStorage: any = {};
  //   testService = new TestService(config, locaStorage);
  //   adminService = new AdminService();
  //   appComponent = new AppComponent(testService, adminService);
  // })


  // it('should get Admin Details', () => {
  //   appComponent.ngOnInit();
  //   const adminDetails = appComponent.adminDetails;
  //   expect(adminDetails).toEqual({
  //     name: 'Anoop',
  //     department: 'IT'
  //   });
  // });

  it(`should have as title 'admin'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('admin');
  });

  it(`should have endpint after oninit`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    console.log(app.adminDetails);
    expect(app.apiEndpoint).toEqual('abc.com');
  });


  it(`should have admin details after oninit`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.adminDetails.name).toEqual('Anoop');
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    // console.log(compiled);
    const dashBoard = compiled.query(By.directive(DashboardComponent));
  //  console.log(dashBoard.query(By.css('ng-touched')));
    expect(dashBoard).toBeDefined();
  });
});
