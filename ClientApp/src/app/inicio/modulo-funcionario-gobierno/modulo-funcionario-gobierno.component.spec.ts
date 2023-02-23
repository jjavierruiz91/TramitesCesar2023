import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloFuncionarioGobiernoComponent } from './modulo-funcionario-gobierno.component';

describe('ModuloFuncionarioGobiernoComponent', () => {
  let component: ModuloFuncionarioGobiernoComponent;
  let fixture: ComponentFixture<ModuloFuncionarioGobiernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloFuncionarioGobiernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloFuncionarioGobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
