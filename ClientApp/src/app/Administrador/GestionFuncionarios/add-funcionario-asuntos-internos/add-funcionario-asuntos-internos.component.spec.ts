import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuncionarioAsuntosInternosComponent } from './add-funcionario-asuntos-internos.component';

describe('AddFuncionarioAsuntosInternosComponent', () => {
  let component: AddFuncionarioAsuntosInternosComponent;
  let fixture: ComponentFixture<AddFuncionarioAsuntosInternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFuncionarioAsuntosInternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFuncionarioAsuntosInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
