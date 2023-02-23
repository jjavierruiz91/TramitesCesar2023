import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesVistaComponent } from './solicitudes-vista.component';

describe('SolicitudesVistaComponent', () => {
  let component: SolicitudesVistaComponent;
  let fixture: ComponentFixture<SolicitudesVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
