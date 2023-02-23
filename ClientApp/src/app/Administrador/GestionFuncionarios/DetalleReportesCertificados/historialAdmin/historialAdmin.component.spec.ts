import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHistorialComponent } from './historialAdmin.component';

describe('AdminHistorialComponent', () => {
  let component: AdminHistorialComponent;
  let fixture: ComponentFixture<AdminHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
