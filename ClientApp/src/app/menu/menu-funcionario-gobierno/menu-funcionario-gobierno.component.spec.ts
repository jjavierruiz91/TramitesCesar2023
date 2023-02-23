import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFuncionarioGobiernoComponent } from './menu-funcionario-gobierno.component';

describe('MenuFuncionarioGobiernoComponent', () => {
  let component: MenuFuncionarioGobiernoComponent;
  let fixture: ComponentFixture<MenuFuncionarioGobiernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFuncionarioGobiernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFuncionarioGobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
