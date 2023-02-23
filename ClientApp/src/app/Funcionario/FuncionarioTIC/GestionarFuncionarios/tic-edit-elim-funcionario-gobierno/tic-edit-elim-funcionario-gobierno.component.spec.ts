import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICEditElimFuncionarioGobiernoComponent } from './tic-edit-elim-funcionario-gobierno.component';

describe('TICEditElimFuncionarioGobiernoComponent', () => {
  let component: TICEditElimFuncionarioGobiernoComponent;
  let fixture: ComponentFixture<TICEditElimFuncionarioGobiernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICEditElimFuncionarioGobiernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICEditElimFuncionarioGobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
