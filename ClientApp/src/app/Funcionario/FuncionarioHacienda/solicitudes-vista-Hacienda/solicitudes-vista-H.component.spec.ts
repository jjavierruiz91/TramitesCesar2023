import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesVistaHaciendaComponent } from './solicitudes-vista-H.component';

describe('SolicitudesVistaHaciendaComponent', () => {
  let component: SolicitudesVistaHaciendaComponent;
  let fixture: ComponentFixture<SolicitudesVistaHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesVistaHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesVistaHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
