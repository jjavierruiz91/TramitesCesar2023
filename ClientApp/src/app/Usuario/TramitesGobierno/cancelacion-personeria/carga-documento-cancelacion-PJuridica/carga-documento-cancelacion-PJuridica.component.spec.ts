import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentoCancelacionPJuridicaComponent } from './carga-documento-cancelacion-PJuridica.component';

describe('CargaDocumentoCancelacionPJuridicaComponent', () => {
  let component: CargaDocumentoCancelacionPJuridicaComponent;
  let fixture: ComponentFixture<CargaDocumentoCancelacionPJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentoCancelacionPJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentoCancelacionPJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
