import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICDeportesReportesComponent } from './reportes-deportes.component';

describe('TICDeportesReportesComponent', () => {
  let component: TICDeportesReportesComponent;
  let fixture: ComponentFixture<TICDeportesReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICDeportesReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICDeportesReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
