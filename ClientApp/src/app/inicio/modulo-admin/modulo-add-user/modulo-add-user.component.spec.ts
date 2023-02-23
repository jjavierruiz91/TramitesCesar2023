import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloAddUserComponent } from './modulo-add-user.component';

describe('ModuloAddUserComponent', () => {
  let component: ModuloAddUserComponent;
  let fixture: ComponentFixture<ModuloAddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloAddUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
