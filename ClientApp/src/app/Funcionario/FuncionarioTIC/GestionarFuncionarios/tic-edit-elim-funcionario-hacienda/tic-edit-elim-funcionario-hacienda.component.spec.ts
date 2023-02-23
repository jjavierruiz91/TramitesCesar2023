import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICEditElimFuncionarioHaciendaComponent } from './tic-edit-elim-funcionario-hacienda.component';

describe('TICEditElimFuncionarioHaciendaComponent', () => {
  let component: TICEditElimFuncionarioHaciendaComponent;
  let fixture: ComponentFixture<TICEditElimFuncionarioHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICEditElimFuncionarioHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICEditElimFuncionarioHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
