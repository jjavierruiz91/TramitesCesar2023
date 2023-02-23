import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloFuncionarioComponent } from './modulo-funcionario.component';

describe('ModuloFuncionarioComponent', () => {
  let component: ModuloFuncionarioComponent;
  let fixture: ComponentFixture<ModuloFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
