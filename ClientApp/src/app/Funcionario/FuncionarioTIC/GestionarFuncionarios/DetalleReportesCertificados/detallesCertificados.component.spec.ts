import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosDetallesComponent } from './detallesCertificados.component';

describe('CertificadosDetallesComponent', () => {
  let component: CertificadosDetallesComponent;
  let fixture: ComponentFixture<CertificadosDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadosDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
