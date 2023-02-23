import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionGestionComponent } from './aprobacion-gestion.component';

describe('AprobacionGestionComponent', () => {
  let component: AprobacionGestionComponent;
  let fixture: ComponentFixture<AprobacionGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobacionGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobacionGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
