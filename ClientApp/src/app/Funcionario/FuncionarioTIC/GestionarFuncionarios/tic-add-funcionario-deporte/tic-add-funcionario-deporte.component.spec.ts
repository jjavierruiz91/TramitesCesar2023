import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICAddFuncionarioDeporteComponent } from './tic-add-funcionario-deporte.component';

describe('TICAddFuncionarioDeporteComponent', () => {
  let component: TICAddFuncionarioDeporteComponent;
  let fixture: ComponentFixture<TICAddFuncionarioDeporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICAddFuncionarioDeporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICAddFuncionarioDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
