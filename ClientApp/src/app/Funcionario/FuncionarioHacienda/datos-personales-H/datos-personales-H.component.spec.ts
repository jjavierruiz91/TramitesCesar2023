import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesHaciendaComponent } from './datos-personales-Hacienda.component';

describe('DatosPersonalesHaciendaComponent', () => {
  let component: DatosPersonalesHaciendaComponent;
  let fixture: ComponentFixture<DatosPersonalesHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPersonalesHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPersonalesHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
