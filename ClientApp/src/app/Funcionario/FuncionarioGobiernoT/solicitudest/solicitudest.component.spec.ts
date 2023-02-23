import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudestComponent } from './solicitudest.component';

describe('SolicitudestComponent', () => {
  let component: SolicitudestComponent;
  let fixture: ComponentFixture<SolicitudestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
