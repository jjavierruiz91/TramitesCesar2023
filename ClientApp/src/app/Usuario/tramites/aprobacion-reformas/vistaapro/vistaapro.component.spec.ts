import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaaproComponent } from './vistaapro.component';

describe('VistaaproComponent', () => {
  let component: VistaaproComponent;
  let fixture: ComponentFixture<VistaaproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaaproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaaproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
