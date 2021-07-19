import { TestBed } from '@angular/core/testing';

import { TestRouteGuard } from './test-route.guard';

describe('TestRouteGuard', () => {
  let guard: TestRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
