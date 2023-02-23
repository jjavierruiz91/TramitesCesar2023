import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADMINDeportesReportesComponent } from './reportes-deportes.component';

describe('TICDeportesReportesComponent', () => {
  let component: ADMINDeportesReportesComponent;
  let fixture: ComponentFixture<ADMINDeportesReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADMINDeportesReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADMINDeportesReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
