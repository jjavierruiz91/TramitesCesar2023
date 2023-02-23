import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista1aproComponent } from './vista1apro.component';

describe('Vista1aproComponent', () => {
  let component: Vista1aproComponent;
  let fixture: ComponentFixture<Vista1aproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista1aproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista1aproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
