import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADMINGobiernoReportesComponent } from './reportes-gobierno.component';

describe('ADMINGobiernoReportesComponent', () => {
  let component: ADMINGobiernoReportesComponent;
  let fixture: ComponentFixture<ADMINGobiernoReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADMINGobiernoReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADMINGobiernoReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
