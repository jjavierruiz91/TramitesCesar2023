import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentoprimerGradoComponent } from './carga-documento-primer.component';

describe('CargaDocumentoprimerGradoComponent', () => {
  let component: CargaDocumentoprimerGradoComponent;
  let fixture: ComponentFixture<CargaDocumentoprimerGradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentoprimerGradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentoprimerGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
