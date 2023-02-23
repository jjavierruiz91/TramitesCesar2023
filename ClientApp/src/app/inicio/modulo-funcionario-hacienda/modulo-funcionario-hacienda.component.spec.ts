import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloFuncionarioHaciendaComponent } from './modulo-funcionario-hacienda.component';

describe('ModuloFuncionarioHaciendaComponent', () => {
  let component: ModuloFuncionarioHaciendaComponent;
  let fixture: ComponentFixture<ModuloFuncionarioHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloFuncionarioHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloFuncionarioHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
