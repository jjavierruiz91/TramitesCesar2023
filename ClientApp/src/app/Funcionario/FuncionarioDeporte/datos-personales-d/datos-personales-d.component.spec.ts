import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesDComponent } from './datos-personales-d.component';

describe('DatosPersonalesDComponent', () => {
  let component: DatosPersonalesDComponent;
  let fixture: ComponentFixture<DatosPersonalesDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPersonalesDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPersonalesDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
