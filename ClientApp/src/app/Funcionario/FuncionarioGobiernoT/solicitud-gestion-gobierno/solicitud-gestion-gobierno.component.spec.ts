import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudGestionGobiernoComponent } from './solicitud-gestion-gobierno.component';

describe('SolicitudGestionGobiernoComponent', () => {
  let component: SolicitudGestionGobiernoComponent;
  let fixture: ComponentFixture<SolicitudGestionGobiernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudGestionGobiernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudGestionGobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
