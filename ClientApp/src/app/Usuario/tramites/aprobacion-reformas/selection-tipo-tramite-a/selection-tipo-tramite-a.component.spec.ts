import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTipoTramiteAComponent } from './selection-tipo-tramite-a.component';

describe('SelectionTipoTramiteAComponent', () => {
  let component: SelectionTipoTramiteAComponent;
  let fixture: ComponentFixture<SelectionTipoTramiteAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionTipoTramiteAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionTipoTramiteAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
