import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoPersonariaGGComponent } from './reconocimiento-personariaGG.component';

describe('ReconocimientoPersonariaGGComponent', () => {
  let component: ReconocimientoPersonariaGGComponent;
  let fixture: ComponentFixture<ReconocimientoPersonariaGGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconocimientoPersonariaGGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoPersonariaGGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
