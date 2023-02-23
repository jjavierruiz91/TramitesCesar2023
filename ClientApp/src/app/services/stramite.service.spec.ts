import { TestBed } from '@angular/core/testing';

import { StramiteService } from './stramite.service';

describe('StramiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StramiteService = TestBed.get(StramiteService);
    expect(service).toBeTruthy();
  });
});
