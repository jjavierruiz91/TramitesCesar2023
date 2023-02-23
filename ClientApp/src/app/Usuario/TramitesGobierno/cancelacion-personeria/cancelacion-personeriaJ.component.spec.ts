import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelacionPersoneriaJuridicaComponent } from './cancelacion-personeriaJ.component';

describe('CancelacionPersoneriaJComponent', () => {
  let component: CancelacionPersoneriaJuridicaComponent;
  let fixture: ComponentFixture<CancelacionPersoneriaJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelacionPersoneriaJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelacionPersoneriaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
