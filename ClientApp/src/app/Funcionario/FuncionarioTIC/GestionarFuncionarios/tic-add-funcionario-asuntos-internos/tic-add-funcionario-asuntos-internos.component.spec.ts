import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICAddFuncionarioAsuntosInternosComponent } from './tic-add-funcionario-asuntos-internos.component';

describe('TICAddFuncionarioAsuntosInternosComponent', () => {
  let component: TICAddFuncionarioAsuntosInternosComponent;
  let fixture: ComponentFixture<TICAddFuncionarioAsuntosInternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICAddFuncionarioAsuntosInternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICAddFuncionarioAsuntosInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
