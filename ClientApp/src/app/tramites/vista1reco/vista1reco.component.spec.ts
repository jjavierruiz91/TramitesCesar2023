import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista1recoComponent } from './vista1reco.component';

describe('Vista1recoComponent', () => {
  let component: Vista1recoComponent;
  let fixture: ComponentFixture<Vista1recoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista1recoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista1recoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
