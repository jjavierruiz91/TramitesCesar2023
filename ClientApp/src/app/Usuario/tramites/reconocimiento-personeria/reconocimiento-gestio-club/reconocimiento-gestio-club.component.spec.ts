import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoGestioClubComponent } from './reconocimiento-gestio-club.component';

describe('ReconocimientoGestioClubComponent', () => {
  let component: ReconocimientoGestioClubComponent;
  let fixture: ComponentFixture<ReconocimientoGestioClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconocimientoGestioClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoGestioClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
