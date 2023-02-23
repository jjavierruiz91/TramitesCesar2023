import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoExistenciaComponent } from './certificado-existencia.component';

describe('CertificadoExistenciaComponent', () => {
  let component: CertificadoExistenciaComponent;
  let fixture: ComponentFixture<CertificadoExistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoExistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoExistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
