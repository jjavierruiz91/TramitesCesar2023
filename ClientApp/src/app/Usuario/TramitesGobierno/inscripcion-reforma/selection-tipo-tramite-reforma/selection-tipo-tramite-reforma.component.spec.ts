import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTipoTramiteReformaComponent } from './selection-tipo-tramite-reforma.component';

describe('SelectionTipoTramiteReformaComponent', () => {
  let component: SelectionTipoTramiteReformaComponent;
  let fixture: ComponentFixture<SelectionTipoTramiteReformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionTipoTramiteReformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionTipoTramiteReformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
