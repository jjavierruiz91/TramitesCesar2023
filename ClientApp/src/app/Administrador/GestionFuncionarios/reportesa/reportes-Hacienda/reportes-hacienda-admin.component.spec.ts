import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADMINHaciendaReportesComponent } from './reportes-hacienda-admin.component';

describe('ADMINHaciendaReportesComponent', () => {
  let component: ADMINHaciendaReportesComponent;
  let fixture: ComponentFixture<ADMINHaciendaReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADMINHaciendaReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADMINHaciendaReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
