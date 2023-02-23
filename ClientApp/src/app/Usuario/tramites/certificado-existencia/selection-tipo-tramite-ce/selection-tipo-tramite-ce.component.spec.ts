import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTipoTramiteCeComponent } from './selection-tipo-tramite-ce.component';

describe('SelectionTipoTramiteCeComponent', () => {
  let component: SelectionTipoTramiteCeComponent;
  let fixture: ComponentFixture<SelectionTipoTramiteCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionTipoTramiteCeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionTipoTramiteCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
