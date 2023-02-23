import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletionTipoTramiteComponent } from './seletion-tipo-tramite.component';

describe('SeletionTipoTramiteComponent', () => {
  let component: SeletionTipoTramiteComponent;
  let fixture: ComponentFixture<SeletionTipoTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeletionTipoTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeletionTipoTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
