import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionDignatariosGobiernoComponent } from './inscripcion-dignatarios-gobierno.component';

describe('InscripcionDignatariosGobiernoComponent', () => {
  let component: InscripcionDignatariosGobiernoComponent;
  let fixture: ComponentFixture<InscripcionDignatariosGobiernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionDignatariosGobiernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionDignatariosGobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
