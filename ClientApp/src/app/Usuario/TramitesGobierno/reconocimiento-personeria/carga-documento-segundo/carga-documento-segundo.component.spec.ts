import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentosegundoGradoComponent } from './carga-documento-segundo.component';

describe('CargaDocumentosegundoGradoComponent', () => {
  let component: CargaDocumentosegundoGradoComponent;
  let fixture: ComponentFixture<CargaDocumentosegundoGradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentosegundoGradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentosegundoGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
