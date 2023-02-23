import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoGestionAutomovilComponent } from './reconocimiento-gestion-automovil.component';

describe('ReconocimientoGestionAutomovilComponent', () => {
  let component: ReconocimientoGestionAutomovilComponent;
  let fixture: ComponentFixture<ReconocimientoGestionAutomovilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconocimientoGestionAutomovilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoGestionAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
