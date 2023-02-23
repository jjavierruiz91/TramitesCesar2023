import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistainsDignatariosGComponent } from './vistainsDignatariosG.component';

describe('VistainsDignatariosGComponent', () => {
  let component: VistainsDignatariosGComponent;
  let fixture: ComponentFixture<VistainsDignatariosGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistainsDignatariosGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistainsDignatariosGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
