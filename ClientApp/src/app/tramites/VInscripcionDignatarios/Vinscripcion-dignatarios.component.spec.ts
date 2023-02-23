import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinscripcionDignatariosComponent } from './Vinscripcion-dignatarios.component';

describe('VinscripciondComponent', () => {
  let component: VinscripcionDignatariosComponent;
  let fixture: ComponentFixture<VinscripcionDignatariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinscripcionDignatariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinscripcionDignatariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
