import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VReconocimientoComponent } from './vreconocimiento.component';

describe('VreconocimientoComponent', () => {
  let component: VReconocimientoComponent;
  let fixture: ComponentFixture<VReconocimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VReconocimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VReconocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
