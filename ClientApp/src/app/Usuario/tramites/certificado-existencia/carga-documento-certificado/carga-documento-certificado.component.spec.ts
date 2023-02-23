import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentoCertificadoComponent } from './carga-documento-certificado.component';

describe('CargaDocumentoCertificadoComponent', () => {
  let component: CargaDocumentoCertificadoComponent;
  let fixture: ComponentFixture<CargaDocumentoCertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentoCertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentoCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
