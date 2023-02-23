import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuncionarioHaciendaComponent } from './add-funcionario-hacienda.component';

describe('AddFuncionarioHaciendaComponent', () => {
  let component: AddFuncionarioHaciendaComponent;
  let fixture: ComponentFixture<AddFuncionarioHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFuncionarioHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFuncionarioHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
