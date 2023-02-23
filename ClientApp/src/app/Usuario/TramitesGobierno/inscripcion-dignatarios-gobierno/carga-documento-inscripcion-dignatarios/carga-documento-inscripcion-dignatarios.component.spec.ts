import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentoInscripcionDignatariosComponent } from './carga-documento-inscripcion-dignatarios.component';

describe('CargaDocumentoInscripcionDignatariosComponent', () => {
  let component: CargaDocumentoInscripcionDignatariosComponent;
  let fixture: ComponentFixture<CargaDocumentoInscripcionDignatariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentoInscripcionDignatariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentoInscripcionDignatariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
