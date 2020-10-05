import { TestBed } from '@angular/core/testing';

import { CommentsresolveGuard } from './commentsresolve.guard';

describe('CommentsresolveGuard', () => {
  let guard: CommentsresolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CommentsresolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
