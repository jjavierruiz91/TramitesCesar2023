import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICAddFuncionarioGobiernoTramitesComponent } from './tic-add-funcionario-gobierno-tramites.component';

describe('TICAddFuncionarioGobiernoTramitesComponent', () => {
  let component: TICAddFuncionarioGobiernoTramitesComponent;
  let fixture: ComponentFixture<TICAddFuncionarioGobiernoTramitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICAddFuncionarioGobiernoTramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICAddFuncionarioGobiernoTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
