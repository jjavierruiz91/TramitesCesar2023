import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesGComponent } from './datos-personales-g.component';

describe('DatosPersonalesGComponent', () => {
  let component: DatosPersonalesGComponent;
  let fixture: ComponentFixture<DatosPersonalesGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPersonalesGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPersonalesGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
