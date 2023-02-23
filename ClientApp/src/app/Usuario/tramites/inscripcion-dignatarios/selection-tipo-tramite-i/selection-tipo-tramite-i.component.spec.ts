import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTipoTramiteIComponent } from './selection-tipo-tramite-i.component';

describe('SelectionTipoTramiteIComponent', () => {
  let component: SelectionTipoTramiteIComponent;
  let fixture: ComponentFixture<SelectionTipoTramiteIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionTipoTramiteIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionTipoTramiteIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
