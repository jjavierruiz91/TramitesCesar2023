import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesTICComponent } from './reportesa-TIC.component';

describe('ReportesAComponent', () => {
  let component: ReportesTICComponent;
  let fixture: ComponentFixture<ReportesTICComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesTICComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesTICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
