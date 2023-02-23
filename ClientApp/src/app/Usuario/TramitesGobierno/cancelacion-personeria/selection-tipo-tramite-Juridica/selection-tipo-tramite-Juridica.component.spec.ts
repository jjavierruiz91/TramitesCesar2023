import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTipoTramiteJuridicaComponent } from './selection-tipo-tramite-Juridica.component';

describe('SelectionTipoTramiteJuridicaComponent', () => {
  let component: SelectionTipoTramiteJuridicaComponent;
  let fixture: ComponentFixture<SelectionTipoTramiteJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionTipoTramiteJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionTipoTramiteJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
