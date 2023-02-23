import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelacionPersoneriaComponent } from './cancelacion-personeria.component';

describe('CancelacionPersoneriaComponent', () => {
  let component: CancelacionPersoneriaComponent;
  let fixture: ComponentFixture<CancelacionPersoneriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelacionPersoneriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelacionPersoneriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
