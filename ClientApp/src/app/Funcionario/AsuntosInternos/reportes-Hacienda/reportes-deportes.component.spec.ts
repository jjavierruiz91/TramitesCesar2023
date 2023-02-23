import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaciendaReportesAsuntosComponent } from './reportes-deportes.component';

describe('HaciendaReportesAsuntosComponent', () => {
  let component: HaciendaReportesAsuntosComponent;
  let fixture: ComponentFixture<HaciendaReportesAsuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaciendaReportesAsuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaciendaReportesAsuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
