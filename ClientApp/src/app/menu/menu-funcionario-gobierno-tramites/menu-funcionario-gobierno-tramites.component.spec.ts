import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFuncionarioGobiernoTramitesComponent } from './menu-funcionario-gobierno-tramites.component';

describe('MenuFuncionarioGobiernoTramitesComponent', () => {
  let component: MenuFuncionarioGobiernoTramitesComponent;
  let fixture: ComponentFixture<MenuFuncionarioGobiernoTramitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFuncionarioGobiernoTramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFuncionarioGobiernoTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
