import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesHaciendaComponent } from './solicitudesH.component';

describe('SolicitudestComponent', () => {
  let component: SolicitudesHaciendaComponent;
  let fixture: ComponentFixture<SolicitudesHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
