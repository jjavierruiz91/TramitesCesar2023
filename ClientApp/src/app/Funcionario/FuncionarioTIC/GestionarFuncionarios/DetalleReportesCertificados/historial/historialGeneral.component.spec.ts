import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHistorialComponent } from './historialGeneral.component';

describe('GeneralHistorialComponent', () => {
  let component: GeneralHistorialComponent;
  let fixture: ComponentFixture<GeneralHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
