import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentoAutomovilComponent } from './carga-documento-automovil.component';

describe('CargaDocumentoAutomovilComponent', () => {
  let component: CargaDocumentoAutomovilComponent;
  let fixture: ComponentFixture<CargaDocumentoAutomovilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentoAutomovilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentoAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
