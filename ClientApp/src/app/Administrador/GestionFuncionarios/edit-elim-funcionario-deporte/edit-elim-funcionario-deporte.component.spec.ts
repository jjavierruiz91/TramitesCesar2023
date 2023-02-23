import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElimFuncionarioDeporteComponent } from './edit-elim-funcionario-deporte.component';

describe('EditElimFuncionarioDeporteComponent', () => {
  let component: EditElimFuncionarioDeporteComponent;
  let fixture: ComponentFixture<EditElimFuncionarioDeporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElimFuncionarioDeporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElimFuncionarioDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
