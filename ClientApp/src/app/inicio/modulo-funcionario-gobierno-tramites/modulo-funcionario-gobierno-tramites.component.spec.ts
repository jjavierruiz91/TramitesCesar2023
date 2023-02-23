import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloFuncionarioGobiernoTramitesComponent } from './modulo-funcionario-gobierno-tramites.component';

describe('ModuloFuncionarioGobiernoTramitesComponent', () => {
  let component: ModuloFuncionarioGobiernoTramitesComponent;
  let fixture: ComponentFixture<ModuloFuncionarioGobiernoTramitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloFuncionarioGobiernoTramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloFuncionarioGobiernoTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
