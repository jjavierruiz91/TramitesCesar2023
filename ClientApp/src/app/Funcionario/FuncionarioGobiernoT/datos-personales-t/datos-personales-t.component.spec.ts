import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesTComponent } from './datos-personales-t.component';

describe('DatosPersonalesTComponent', () => {
  let component: DatosPersonalesTComponent;
  let fixture: ComponentFixture<DatosPersonalesTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPersonalesTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPersonalesTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
