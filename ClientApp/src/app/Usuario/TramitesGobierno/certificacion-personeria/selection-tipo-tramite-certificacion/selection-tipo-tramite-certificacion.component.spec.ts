import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTipoTramiteCertificacionComponent } from './selection-tipo-tramite-certificacion.component';

describe('SelectionTipoTramiteCertificacionComponent', () => {
  let component: SelectionTipoTramiteCertificacionComponent;
  let fixture: ComponentFixture<SelectionTipoTramiteCertificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionTipoTramiteCertificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionTipoTramiteCertificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
