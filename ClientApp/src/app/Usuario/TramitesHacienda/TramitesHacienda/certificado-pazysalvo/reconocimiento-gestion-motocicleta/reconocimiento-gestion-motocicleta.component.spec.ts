import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoGestionMotocicletaComponent } from './reconocimiento-gestion-motocicleta.component';

describe('ReconocimientoGestionMotocicletaComponent', () => {
  let component: ReconocimientoGestionMotocicletaComponent;
  let fixture: ComponentFixture<ReconocimientoGestionMotocicletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconocimientoGestionMotocicletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoGestionMotocicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
