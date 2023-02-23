import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VCertificacionComponent } from './vcertificacion.component';

describe('Vista1aproComponent', () => {
  let component: VCertificacionComponent;
  let fixture: ComponentFixture<VCertificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VCertificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VCertificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
