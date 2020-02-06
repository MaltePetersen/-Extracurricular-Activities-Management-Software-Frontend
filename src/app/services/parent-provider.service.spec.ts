import { TestBed } from '@angular/core/testing';

import { ParentProviderService } from './parent-provider.service';

describe('ParentProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentProviderService = TestBed.get(ParentProviderService);
    expect(service).toBeTruthy();
  });
});
