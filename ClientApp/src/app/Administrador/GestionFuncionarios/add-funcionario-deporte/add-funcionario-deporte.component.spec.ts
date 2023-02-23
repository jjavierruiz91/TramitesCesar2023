import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuncionarioDeporteComponent } from './add-funcionario-deporte.component';

describe('AddFuncionarioDeporteComponent', () => {
  let component: AddFuncionarioDeporteComponent;
  let fixture: ComponentFixture<AddFuncionarioDeporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFuncionarioDeporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFuncionarioDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
