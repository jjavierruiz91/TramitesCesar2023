import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAsuntosInternosComponent } from './menu-asuntos-internos.component';

describe('MenuAsuntosInternosComponent', () => {
  let component: MenuAsuntosInternosComponent;
  let fixture: ComponentFixture<MenuAsuntosInternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAsuntosInternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAsuntosInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
