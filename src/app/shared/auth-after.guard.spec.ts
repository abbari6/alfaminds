import { TestBed } from '@angular/core/testing';

import { AuthAfterGuard } from './auth-after.guard';

describe('AuthAfterGuard', () => {
  let guard: AuthAfterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthAfterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
