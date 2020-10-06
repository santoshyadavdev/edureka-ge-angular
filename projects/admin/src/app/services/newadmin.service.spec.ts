import { TestBed } from '@angular/core/testing';

import { NewadminService } from './newadmin.service';

describe('NewadminService', () => {
  let service: NewadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
