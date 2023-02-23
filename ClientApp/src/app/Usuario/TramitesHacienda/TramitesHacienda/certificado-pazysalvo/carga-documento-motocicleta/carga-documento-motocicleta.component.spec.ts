import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentoMotocicletaComponent } from './carga-documento-motocicleta.component';

describe('CargaDocumentoMotocicletaComponent', () => {
  let component: CargaDocumentoMotocicletaComponent;
  let fixture: ComponentFixture<CargaDocumentoMotocicletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentoMotocicletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentoMotocicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
