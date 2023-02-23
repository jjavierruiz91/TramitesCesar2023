import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinscripcionRComponent } from './Vinscripcion-reforma.component';

describe('VinscripcionrComponent', () => {
  let component: VinscripcionRComponent;
  let fixture: ComponentFixture<VinscripcionRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinscripcionRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinscripcionRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
