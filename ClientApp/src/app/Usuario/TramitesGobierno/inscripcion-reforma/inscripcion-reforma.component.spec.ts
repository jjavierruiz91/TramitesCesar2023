import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionReformaComponent } from './inscripcion-reforma.component';

describe('InscripcionReformaComponent', () => {
  let component: InscripcionReformaComponent;
  let fixture: ComponentFixture<InscripcionReformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionReformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionReformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
