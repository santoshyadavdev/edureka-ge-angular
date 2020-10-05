import { TestBed } from '@angular/core/testing';

import { CommentdetailsGuard } from './commentdetails.guard';

describe('CommentdetailsGuard', () => {
  let guard: CommentdetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CommentdetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
