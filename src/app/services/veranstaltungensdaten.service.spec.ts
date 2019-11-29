import { TestBed } from '@angular/core/testing';

import { VeranstaltungensdatenService } from './veranstaltungensdaten.service';

describe('VeranstaltungensdatenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeranstaltungensdatenService = TestBed.get(VeranstaltungensdatenService);
    expect(service).toBeTruthy();
  });
});
