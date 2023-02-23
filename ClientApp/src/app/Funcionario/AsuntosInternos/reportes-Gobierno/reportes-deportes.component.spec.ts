import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GobiernoReportesAsuntosComponent } from './reportes-deportes.component';

describe('GobiernoReportesAsuntosComponent', () => {
  let component: GobiernoReportesAsuntosComponent;
  let fixture: ComponentFixture<GobiernoReportesAsuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GobiernoReportesAsuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GobiernoReportesAsuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
