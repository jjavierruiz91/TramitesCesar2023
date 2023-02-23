import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentoCancelacionComponent } from './carga-documento-cancelacion.component';

describe('CargaDocumentoCancelacionComponent', () => {
  let component: CargaDocumentoCancelacionComponent;
  let fixture: ComponentFixture<CargaDocumentoCancelacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentoCancelacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentoCancelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
