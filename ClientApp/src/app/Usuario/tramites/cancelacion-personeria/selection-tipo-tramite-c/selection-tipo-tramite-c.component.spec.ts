import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTipoTramiteCComponent } from './selection-tipo-tramite-c.component';

describe('SelectionTipoTramiteCComponent', () => {
  let component: SelectionTipoTramiteCComponent;
  let fixture: ComponentFixture<SelectionTipoTramiteCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionTipoTramiteCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionTipoTramiteCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
