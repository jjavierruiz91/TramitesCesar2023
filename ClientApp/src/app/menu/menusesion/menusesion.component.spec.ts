import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusesionComponent } from './menusesion.component';

describe('MenusesionComponent', () => {
  let component: MenusesionComponent;
  let fixture: ComponentFixture<MenusesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
