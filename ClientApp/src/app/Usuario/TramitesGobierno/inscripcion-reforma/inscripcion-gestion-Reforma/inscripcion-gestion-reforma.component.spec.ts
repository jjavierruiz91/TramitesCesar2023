import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionGestionReformaComponent } from './inscripcion-gestion-reforma.component';

describe('InscripcionGestionReformaComponent', () => {
  let component: InscripcionGestionReformaComponent;
  let fixture: ComponentFixture<InscripcionGestionReformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionGestionReformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionGestionReformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
