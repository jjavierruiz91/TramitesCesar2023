import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista1insComponent } from './vista1ins.component';

describe('Vista1insComponent', () => {
  let component: Vista1insComponent;
  let fixture: ComponentFixture<Vista1insComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista1insComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista1insComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
