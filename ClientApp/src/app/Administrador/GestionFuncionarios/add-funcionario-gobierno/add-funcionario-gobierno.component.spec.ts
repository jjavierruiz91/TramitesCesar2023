import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuncionarioGobiernoComponent } from './add-funcionario-gobierno.component';

describe('AddFuncionarioGobiernoComponent', () => {
  let component: AddFuncionarioGobiernoComponent;
  let fixture: ComponentFixture<AddFuncionarioGobiernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFuncionarioGobiernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFuncionarioGobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
