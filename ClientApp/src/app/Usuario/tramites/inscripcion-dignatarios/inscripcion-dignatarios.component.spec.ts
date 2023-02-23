import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionDignatariosComponent } from './inscripcion-dignatarios.component';

describe('InscripcionDignatariosComponent', () => {
  let component: InscripcionDignatariosComponent;
  let fixture: ComponentFixture<InscripcionDignatariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionDignatariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionDignatariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
