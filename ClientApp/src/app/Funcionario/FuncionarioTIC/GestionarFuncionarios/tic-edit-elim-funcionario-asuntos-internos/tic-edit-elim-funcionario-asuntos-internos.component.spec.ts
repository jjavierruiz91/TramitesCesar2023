import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICEditElimFuncionarioAsuntosInternosComponent } from './tic-edit-elim-funcionario-asuntos-internos.component';

describe('TICEditElimFuncionarioAsuntosInternosComponent', () => {
  let component: TICEditElimFuncionarioAsuntosInternosComponent;
  let fixture: ComponentFixture<TICEditElimFuncionarioAsuntosInternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICEditElimFuncionarioAsuntosInternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICEditElimFuncionarioAsuntosInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
