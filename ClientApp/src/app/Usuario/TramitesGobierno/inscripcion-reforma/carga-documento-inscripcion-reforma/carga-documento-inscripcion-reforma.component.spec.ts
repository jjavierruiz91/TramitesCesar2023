import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentoInscripcionReformaComponent } from './carga-documento-inscripcion-reforma.component';

describe('CargaDocumentoInscripcionReformaComponent', () => {
  let component: CargaDocumentoInscripcionReformaComponent;
  let fixture: ComponentFixture<CargaDocumentoInscripcionReformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentoInscripcionReformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentoInscripcionReformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
