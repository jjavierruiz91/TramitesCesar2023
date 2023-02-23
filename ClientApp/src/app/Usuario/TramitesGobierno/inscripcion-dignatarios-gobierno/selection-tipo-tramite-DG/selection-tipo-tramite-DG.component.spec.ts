import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTipoTramiteDGComponent } from './selection-tipo-tramite-DG.component';

describe('SelectionTipoTramiteDGComponent', () => {
  let component: SelectionTipoTramiteDGComponent;
  let fixture: ComponentFixture<SelectionTipoTramiteDGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionTipoTramiteDGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionTipoTramiteDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
