import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoGestionComponent } from './certificado-gestion.component';

describe('CertificadoGestionComponent', () => {
  let component: CertificadoGestionComponent;
  let fixture: ComponentFixture<CertificadoGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
