import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentoCertificacionComponent } from './carga-documento-certificacion.component';

describe('CargaDocumentoCertificacionComponent', () => {
  let component: CargaDocumentoCertificacionComponent;
  let fixture: ComponentFixture<CargaDocumentoCertificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentoCertificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentoCertificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
