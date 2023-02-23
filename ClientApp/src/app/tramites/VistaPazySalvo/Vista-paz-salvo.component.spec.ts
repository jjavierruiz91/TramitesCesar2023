import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistapazsalvoComponent } from './Vista-paz-salvo.component';

describe('VistapazsalvoComponent', () => {
  let component: VistapazsalvoComponent;
  let fixture: ComponentFixture<VistapazsalvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistapazsalvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistapazsalvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
