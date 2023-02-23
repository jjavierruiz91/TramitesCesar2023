import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentoInscripcionComponent } from './carga-documento-inscripcion.component';

describe('CargaDocumentoInscripcionComponent', () => {
  let component: CargaDocumentoInscripcionComponent;
  let fixture: ComponentFixture<CargaDocumentoInscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentoInscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentoInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
