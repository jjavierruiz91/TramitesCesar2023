import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelacionGestionComponent } from './cancelacion-gestion.component';

describe('CancelacionGestionComponent', () => {
  let component: CancelacionGestionComponent;
  let fixture: ComponentFixture<CancelacionGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelacionGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelacionGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
