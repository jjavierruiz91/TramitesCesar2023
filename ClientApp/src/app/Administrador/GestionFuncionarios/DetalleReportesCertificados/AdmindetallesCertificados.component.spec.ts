import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCertificadosDetallesComponent } from './AdmindetallesCertificados.component';

describe('AdminCertificadosDetallesComponent', () => {
  let component: AdminCertificadosDetallesComponent;
  let fixture: ComponentFixture<AdminCertificadosDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCertificadosDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCertificadosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
