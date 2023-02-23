import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPSComponent } from './vistaPScomponent';

describe('VistaPSComponent', () => {
  let component: VistaPSComponent;
  let fixture: ComponentFixture<VistaPSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
