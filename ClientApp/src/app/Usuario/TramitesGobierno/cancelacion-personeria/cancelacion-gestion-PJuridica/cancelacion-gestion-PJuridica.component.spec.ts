import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelacionGestionPJuridicaComponent } from './cancelacion-gestion-PJuridica.component';

describe('CancelacionGestionPJuridicaComponent', () => {
  let component: CancelacionGestionPJuridicaComponent;
  let fixture: ComponentFixture<CancelacionGestionPJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelacionGestionPJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelacionGestionPJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
