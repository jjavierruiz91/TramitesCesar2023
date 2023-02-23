import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElimFuncionarioTicComponent } from './edit-elim-funcionario-tic.component';

describe('EditElimFuncionarioTicComponent', () => {
  let component: EditElimFuncionarioTicComponent;
  let fixture: ComponentFixture<EditElimFuncionarioTicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElimFuncionarioTicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElimFuncionarioTicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
