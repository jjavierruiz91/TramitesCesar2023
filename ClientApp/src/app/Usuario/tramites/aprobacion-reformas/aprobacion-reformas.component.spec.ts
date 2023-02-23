import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionReformasComponent } from './aprobacion-reformas.component';

describe('AprobacionReformasComponent', () => {
  let component: AprobacionReformasComponent;
  let fixture: ComponentFixture<AprobacionReformasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobacionReformasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobacionReformasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
