import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentoLigaComponent } from './carga-documento-liga.component';

describe('CargaDocumentoLigaComponent', () => {
  let component: CargaDocumentoLigaComponent;
  let fixture: ComponentFixture<CargaDocumentoLigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentoLigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentoLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
