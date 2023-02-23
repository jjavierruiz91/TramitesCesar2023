import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICHaciendaReportesComponent } from './reportes-hacienda.component';

describe('TICHaciendaReportesComponent', () => {
  let component: TICHaciendaReportesComponent;
  let fixture: ComponentFixture<TICHaciendaReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICHaciendaReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICHaciendaReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
