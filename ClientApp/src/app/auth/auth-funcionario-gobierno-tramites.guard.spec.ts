import { TestBed, async, inject } from '@angular/core/testing';

import { AuthFuncionarioGobiernoTramitesGuard } from './auth-funcionario-gobierno-tramites.guard';

describe('AuthFuncionarioGobiernoTramitesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthFuncionarioGobiernoTramitesGuard]
    });
  });

  it('should ...', inject([AuthFuncionarioGobiernoTramitesGuard], (guard: AuthFuncionarioGobiernoTramitesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
