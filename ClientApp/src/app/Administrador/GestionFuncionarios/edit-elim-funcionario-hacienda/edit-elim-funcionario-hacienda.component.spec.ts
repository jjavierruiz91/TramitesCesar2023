import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElimFuncionarioHaciendaComponent } from './edit-elim-funcionario-hacienda.component';

describe('EditElimFuncionarioHaciendaComponent', () => {
  let component: EditElimFuncionarioHaciendaComponent;
  let fixture: ComponentFixture<EditElimFuncionarioHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElimFuncionarioHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElimFuncionarioHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
