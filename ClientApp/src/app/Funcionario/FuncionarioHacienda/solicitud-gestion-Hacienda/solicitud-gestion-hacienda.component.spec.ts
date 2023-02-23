import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudGestionHaciendaComponent } from './solicitud-gestion-hacienda.component';

describe('SolicitudGestionHaciendaComponent', () => {
  let component: SolicitudGestionHaciendaComponent;
  let fixture: ComponentFixture<SolicitudGestionHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudGestionHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudGestionHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
