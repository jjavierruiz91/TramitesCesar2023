import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesVistaTComponent } from './solicitudes-vista.component';

describe('SolicitudesVistaTComponent', () => {
  let component: SolicitudesVistaTComponent;
  let fixture: ComponentFixture<SolicitudesVistaTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesVistaTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesVistaTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
