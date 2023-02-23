import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportesReportesAsuntosComponent } from './reportes-deportes.component';

describe('DeportesReportesAsuntosComponent', () => {
  let component: DeportesReportesAsuntosComponent;
  let fixture: ComponentFixture<DeportesReportesAsuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeportesReportesAsuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportesReportesAsuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
