import { TestBed, async, inject } from '@angular/core/testing';

import { AuthguardFuncionarioHaciendaGuard } from './authguard-funcionario-hacienda.guard';

describe('AuthguardFuncionarioHaciendaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthguardFuncionarioHaciendaGuard]
    });
  });

  it('should ...', inject([AuthguardFuncionarioHaciendaGuard], (guard: AuthguardFuncionarioHaciendaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
