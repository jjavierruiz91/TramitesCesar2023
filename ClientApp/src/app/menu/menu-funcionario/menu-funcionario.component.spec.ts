import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFuncionarioComponent } from './menu-funcionario.component';

describe('MenuFuncionarioComponent', () => {
  let component: MenuFuncionarioComponent;
  let fixture: ComponentFixture<MenuFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
