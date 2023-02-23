import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoPersonariaComponent } from './reconocimiento-personaria.component';

describe('ReconocimientoPersonariaComponent', () => {
  let component: ReconocimientoPersonariaComponent;
  let fixture: ComponentFixture<ReconocimientoPersonariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconocimientoPersonariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoPersonariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
