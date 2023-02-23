import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletionTipoTramitePazySalvoComponent } from './seletion-tipo-tramitePazySalvo.component';

describe('SeletionTipoTramitePazySalvoComponent', () => {
  let component: SeletionTipoTramitePazySalvoComponent;
  let fixture: ComponentFixture<SeletionTipoTramitePazySalvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeletionTipoTramitePazySalvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeletionTipoTramitePazySalvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
