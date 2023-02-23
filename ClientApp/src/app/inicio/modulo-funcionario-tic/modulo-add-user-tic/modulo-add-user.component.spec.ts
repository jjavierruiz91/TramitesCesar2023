import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TICModuloAddUserComponent } from './modulo-add-user.component';

describe('TICModuloAddUserComponent', () => {
  let component: TICModuloAddUserComponent;
  let fixture: ComponentFixture<TICModuloAddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TICModuloAddUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TICModuloAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
