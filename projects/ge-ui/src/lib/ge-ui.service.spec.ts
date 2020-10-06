import { TestBed } from '@angular/core/testing';

import { GeUiService } from './ge-ui.service';

describe('GeUiService', () => {
  let service: GeUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
