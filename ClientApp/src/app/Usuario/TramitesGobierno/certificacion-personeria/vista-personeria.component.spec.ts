import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPersoneriaComponent } from './vista-personeria.component';

describe('VistaPersoneriaComponent', () => {
  let component: VistaPersoneriaComponent;
  let fixture: ComponentFixture<VistaPersoneriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPersoneriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPersoneriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
