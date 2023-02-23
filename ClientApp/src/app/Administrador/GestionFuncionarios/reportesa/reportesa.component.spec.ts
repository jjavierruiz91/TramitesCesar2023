import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesAComponent } from './reportesa.component';

describe('ReportesAComponent', () => {
  let component: ReportesAComponent;
  let fixture: ComponentFixture<ReportesAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
