import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesAsuntosComponent } from './reportes-asuntos.component';

describe('ReportesAsuntosComponent', () => {
  let component: ReportesAsuntosComponent;
  let fixture: ComponentFixture<ReportesAsuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesAsuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesAsuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
