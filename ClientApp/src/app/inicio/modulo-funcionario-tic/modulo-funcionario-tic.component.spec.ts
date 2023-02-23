import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloFuncionarioTICComponent } from './modulo-funcionario-tic.component';

describe('ModuloFuncionarioTICComponent', () => {
  let component: ModuloFuncionarioTICComponent;
  let fixture: ComponentFixture<ModuloFuncionarioTICComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloFuncionarioTICComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloFuncionarioTICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
