import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElimFuncionarioAsuntosInternosComponent } from './edit-elim-funcionario-asuntos-internos.component';

describe('EditElimFuncionarioAsuntosInternosComponent', () => {
  let component: EditElimFuncionarioAsuntosInternosComponent;
  let fixture: ComponentFixture<EditElimFuncionarioAsuntosInternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElimFuncionarioAsuntosInternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElimFuncionarioAsuntosInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
