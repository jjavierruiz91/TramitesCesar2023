import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICEditElimFuncionarioDeporteComponent } from './tic-edit-elim-funcionario-deporte.component';

describe('TICEditElimFuncionarioDeporteComponent', () => {
  let component: TICEditElimFuncionarioDeporteComponent;
  let fixture: ComponentFixture<TICEditElimFuncionarioDeporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICEditElimFuncionarioDeporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICEditElimFuncionarioDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
