import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionGestionComponent } from './inscripcion-gestion.component';

describe('InscripcionGestionComponent', () => {
  let component: InscripcionGestionComponent;
  let fixture: ComponentFixture<InscripcionGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
