import { TestBed } from '@angular/core/testing';

import { TramiteService } from './tramite.service';

describe('TramiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TramiteService = TestBed.get(TramiteService);
    expect(service).toBeTruthy();
  });
});
