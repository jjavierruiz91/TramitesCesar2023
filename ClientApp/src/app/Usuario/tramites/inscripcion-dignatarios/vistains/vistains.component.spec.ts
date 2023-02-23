import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistainsComponent } from './vistains.component';

describe('VistainsComponent', () => {
  let component: VistainsComponent;
  let fixture: ComponentFixture<VistainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
