import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocInscripcionComponent } from './carga-doc-inscripcion.component';

describe('CargaDocInscripcionComponent', () => {
  let component: CargaDocInscripcionComponent;
  let fixture: ComponentFixture<CargaDocInscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocInscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
