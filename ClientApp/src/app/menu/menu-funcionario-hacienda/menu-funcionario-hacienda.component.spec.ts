import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFuncionarioHaciendaComponent } from './menu-funcionario-hacienda.component';

describe('MenuFuncionarioHaciendaComponent', () => {
  let component: MenuFuncionarioHaciendaComponent;
  let fixture: ComponentFixture<MenuFuncionarioHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFuncionarioHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFuncionarioHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
