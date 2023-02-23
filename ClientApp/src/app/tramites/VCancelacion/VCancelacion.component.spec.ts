import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VCancelacionComponent } from './vcancelacion.component';

describe('VcancelacionComponent', () => {
  let component: VCancelacionComponent;
  let fixture: ComponentFixture<VCancelacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VCancelacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VCancelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
