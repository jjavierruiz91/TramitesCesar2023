import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesgComponent } from './solicitudesg.component';

describe('SolicitudesgComponent', () => {
  let component: SolicitudesgComponent;
  let fixture: ComponentFixture<SolicitudesgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
