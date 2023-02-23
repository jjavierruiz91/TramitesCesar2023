import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesHaciendaComponent } from './reportesH.component';

describe('ReportesHacinedaComponent', () => {
  let component: ReportesHaciendaComponent;
  let fixture: ComponentFixture<ReportesHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
