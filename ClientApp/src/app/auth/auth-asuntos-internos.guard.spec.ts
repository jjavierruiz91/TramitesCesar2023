import { TestBed, async, inject } from '@angular/core/testing';

import { AuthAsuntosInternosGuard } from './auth-asuntos-internos.guard';

describe('AuthAsuntosInternosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAsuntosInternosGuard]
    });
  });

  it('should ...', inject([AuthAsuntosInternosGuard], (guard: AuthAsuntosInternosGuard) => {
    expect(guard).toBeTruthy();
  }));
});
