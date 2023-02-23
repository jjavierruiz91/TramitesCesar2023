import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFuncionarioTICComponent } from './menu-funcionario-tic.component';

describe('MenuFuncionarioTICComponent', () => {
  let component: MenuFuncionarioTICComponent;
  let fixture: ComponentFixture<MenuFuncionarioTICComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFuncionarioTICComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFuncionarioTICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
