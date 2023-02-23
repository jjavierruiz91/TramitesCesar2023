import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuncionarioTicComponent } from './add-funcionario-tic.component';

describe('AddFuncionarioTicComponent', () => {
  let component: AddFuncionarioTicComponent;
  let fixture: ComponentFixture<AddFuncionarioTicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFuncionarioTicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFuncionarioTicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
