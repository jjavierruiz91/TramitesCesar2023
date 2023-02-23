import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacionGestionComponent } from './certificacion-gestion.component';

describe('CertificacionGestionComponent', () => {
  let component: CertificacionGestionComponent;
  let fixture: ComponentFixture<CertificacionGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificacionGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificacionGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
