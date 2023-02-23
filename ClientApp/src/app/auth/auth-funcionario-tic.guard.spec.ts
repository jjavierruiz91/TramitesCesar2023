import { TestBed, async, inject } from '@angular/core/testing';

import { FuncionarioTICGuard } from './auth-funcionario-tic.guard';

describe('FuncionarioTICGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FuncionarioTICGuard]
    });
  });

  it('should ...', inject([FuncionarioTICGuard], (guard: FuncionarioTICGuard) => {
    expect(guard).toBeTruthy();
  }));
});
