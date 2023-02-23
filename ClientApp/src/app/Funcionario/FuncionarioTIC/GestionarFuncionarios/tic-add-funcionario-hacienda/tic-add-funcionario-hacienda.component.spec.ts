import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICAddFuncionarioHaciendaComponent } from './tic-add-funcionario-hacienda.component';

describe('TICAddFuncionarioHaciendaComponent', () => {
  let component: TICAddFuncionarioHaciendaComponent;
  let fixture: ComponentFixture<TICAddFuncionarioHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICAddFuncionarioHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICAddFuncionarioHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
