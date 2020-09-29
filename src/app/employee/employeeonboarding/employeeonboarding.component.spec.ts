import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeonboardingComponent } from './employeeonboarding.component';

describe('EmployeeonboardingComponent', () => {
  let component: EmployeeonboardingComponent;
  let fixture: ComponentFixture<EmployeeonboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeonboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeonboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
