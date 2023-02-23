import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesTComponent } from './reportest.component';

describe('ReportesTComponent', () => {
  let component: ReportesTComponent;
  let fixture: ComponentFixture<ReportesTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
