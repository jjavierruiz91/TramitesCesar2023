import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoGestioLigaComponent } from './reconocimiento-gestio-liga.component';

describe('ReconocimientoGestioLigaComponent', () => {
  let component: ReconocimientoGestioLigaComponent;
  let fixture: ComponentFixture<ReconocimientoGestioLigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconocimientoGestioLigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoGestioLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
