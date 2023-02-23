import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacanComponent } from './vistacan.component';

describe('VistacanComponent', () => {
  let component: VistacanComponent;
  let fixture: ComponentFixture<VistacanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistacanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistacanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
