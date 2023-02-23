import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista1canComponent } from './vista1can.component';

describe('Vista1canComponent', () => {
  let component: Vista1canComponent;
  let fixture: ComponentFixture<Vista1canComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista1canComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista1canComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
