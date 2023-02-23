import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoGestioprimerGradoComponent } from './reconocimiento-gestio-primer.component';

describe('ReconocimientoGestioprimerGradoComponent', () => {
  let component: ReconocimientoGestioprimerGradoComponent;
  let fixture: ComponentFixture<ReconocimientoGestioprimerGradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconocimientoGestioprimerGradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoGestioprimerGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
