import { TestBed } from '@angular/core/testing';

import { ProductfactoryService } from './productfactory.service';

describe('ProductfactoryService', () => {
  let service: ProductfactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductfactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
