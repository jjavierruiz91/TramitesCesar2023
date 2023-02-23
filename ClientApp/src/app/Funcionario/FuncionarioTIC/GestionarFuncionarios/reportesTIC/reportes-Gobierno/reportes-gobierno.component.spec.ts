import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICGobiernoReportesComponent } from './reportes-gobierno.component';

describe('TICGobiernoReportesComponent', () => {
  let component: TICGobiernoReportesComponent;
  let fixture: ComponentFixture<TICGobiernoReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICGobiernoReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICGobiernoReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
