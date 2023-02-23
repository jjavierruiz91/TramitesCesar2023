import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloAsuntosInternosComponent } from './modulo-asuntos-internos.component';

describe('ModuloAsuntosInternosComponent', () => {
  let component: ModuloAsuntosInternosComponent;
  let fixture: ComponentFixture<ModuloAsuntosInternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloAsuntosInternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloAsuntosInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
