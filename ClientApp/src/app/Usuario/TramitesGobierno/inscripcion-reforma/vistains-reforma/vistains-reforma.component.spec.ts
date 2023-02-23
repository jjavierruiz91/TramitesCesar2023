import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistainsReformaComponent } from './vistains-reforma.component';

describe('VistainsReformaComponent', () => {
  let component: VistainsReformaComponent;
  let fixture: ComponentFixture<VistainsReformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistainsReformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistainsReformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
