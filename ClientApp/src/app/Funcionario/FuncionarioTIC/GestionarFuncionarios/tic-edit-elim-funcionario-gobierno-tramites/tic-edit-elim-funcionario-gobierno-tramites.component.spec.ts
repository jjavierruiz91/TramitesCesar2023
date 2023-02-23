import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICEditElimFuncionarioGobiernoTramitesComponent } from './tic-edit-elim-funcionario-gobierno-tramites.component';

describe('TICEditElimFuncionarioGobiernoTramitesComponent', () => {
  let component: TICEditElimFuncionarioGobiernoTramitesComponent;
  let fixture: ComponentFixture<TICEditElimFuncionarioGobiernoTramitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICEditElimFuncionarioGobiernoTramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICEditElimFuncionarioGobiernoTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
