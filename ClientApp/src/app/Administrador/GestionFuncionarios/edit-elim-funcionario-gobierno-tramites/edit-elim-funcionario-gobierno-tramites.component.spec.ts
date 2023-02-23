import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElimFuncionarioGobiernoTramitesComponent } from './edit-elim-funcionario-gobierno-tramites.component';

describe('EditElimFuncionarioGobiernoComponent', () => {
  let component: EditElimFuncionarioGobiernoTramitesComponent;
  let fixture: ComponentFixture<EditElimFuncionarioGobiernoTramitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElimFuncionarioGobiernoTramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElimFuncionarioGobiernoTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
