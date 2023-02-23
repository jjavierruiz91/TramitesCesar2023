import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesHaciendaComponent } from './TramitesHacienda.component';

describe('TramitesHaciendaComponent', () => {
  let component: TramitesHaciendaComponent;
  let fixture: ComponentFixture<TramitesHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramitesHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TramitesHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
