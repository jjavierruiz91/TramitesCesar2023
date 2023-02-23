import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentoAprobacionComponent } from './carga-documento-aprobacion.component';

describe('CargaDocumentoAprobacionComponent', () => {
  let component: CargaDocumentoAprobacionComponent;
  let fixture: ComponentFixture<CargaDocumentoAprobacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentoAprobacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentoAprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
