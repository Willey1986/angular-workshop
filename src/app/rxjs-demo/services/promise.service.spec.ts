import { TestBed } from '@angular/core/testing';

import { PromiseService } from './promise.service';

describe('PromiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromiseService = TestBed.get(PromiseService);
    expect(service).toBeTruthy();
  });
});
