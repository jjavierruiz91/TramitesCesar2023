import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionGestionDignatariosComponent } from './inscripcion-gestion-dignatarios.component';

describe('InscripcionGestionDignatariosComponent', () => {
  let component: InscripcionGestionDignatariosComponent;
  let fixture: ComponentFixture<InscripcionGestionDignatariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionGestionDignatariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionGestionDignatariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
