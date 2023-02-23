import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesAsComponent } from './datos-personales-as.component';

describe('DatosPersonalesAsComponent', () => {
  let component: DatosPersonalesAsComponent;
  let fixture: ComponentFixture<DatosPersonalesAsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPersonalesAsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPersonalesAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
