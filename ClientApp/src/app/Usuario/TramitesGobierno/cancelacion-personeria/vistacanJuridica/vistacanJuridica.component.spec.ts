import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacanJuridicaComponent } from './vistacanJuridica.component';

describe('VistacanJuridicaComponent', () => {
  let component: VistacanJuridicaComponent;
  let fixture: ComponentFixture<VistacanJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistacanJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistacanJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
