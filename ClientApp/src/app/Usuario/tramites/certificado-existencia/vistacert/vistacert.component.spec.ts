import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacertComponent } from './vistacert.component';

describe('VistacertComponent', () => {
  let component: VistacertComponent;
  let fixture: ComponentFixture<VistacertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistacertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistacertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
