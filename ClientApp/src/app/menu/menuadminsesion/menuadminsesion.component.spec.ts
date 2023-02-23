import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuadminsesionComponent } from './menuadminsesion.component';

describe('MenuadminsesionComponent', () => {
  let component: MenuadminsesionComponent;
  let fixture: ComponentFixture<MenuadminsesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuadminsesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuadminsesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
