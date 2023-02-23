import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletionTipoTramiteGComponent } from './seletion-tipo-tramiteG.component';

describe('SeletionTipoTramiteComponent', () => {
  let component: SeletionTipoTramiteGComponent;
  let fixture: ComponentFixture<SeletionTipoTramiteGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeletionTipoTramiteGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeletionTipoTramiteGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
