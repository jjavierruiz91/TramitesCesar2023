import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICAddFuncionarioGobiernoComponent } from './tic-add-funcionario-gobierno.component';

describe('TICAddFuncionarioGobiernoComponent', () => {
  let component: TICAddFuncionarioGobiernoComponent;
  let fixture: ComponentFixture<TICAddFuncionarioGobiernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICAddFuncionarioGobiernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICAddFuncionarioGobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
