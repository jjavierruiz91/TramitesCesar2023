import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuncionarioGobiernoTramitesComponent } from './add-funcionario-gobierno-tramites.component';

describe('AddFuncionarioGobiernoTramitesComponent', () => {
  let component: AddFuncionarioGobiernoTramitesComponent;
  let fixture: ComponentFixture<AddFuncionarioGobiernoTramitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFuncionarioGobiernoTramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFuncionarioGobiernoTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
