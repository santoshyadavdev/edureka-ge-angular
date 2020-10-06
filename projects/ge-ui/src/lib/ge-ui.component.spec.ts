import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeUiComponent } from './ge-ui.component';

describe('GeUiComponent', () => {
  let component: GeUiComponent;
  let fixture: ComponentFixture<GeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
