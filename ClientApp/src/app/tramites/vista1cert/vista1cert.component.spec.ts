import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista1certComponent } from './vista1cert.component';

describe('Vista1certComponent', () => {
  let component: Vista1certComponent;
  let fixture: ComponentFixture<Vista1certComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista1certComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista1certComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
