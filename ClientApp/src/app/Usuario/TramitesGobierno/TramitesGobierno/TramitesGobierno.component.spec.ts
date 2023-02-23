import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesGobiernoComponent } from './tramitesgobierno.component';

describe('TramitesGobiernoComponent', () => {
  let component: TramitesGobiernoComponent;
  let fixture: ComponentFixture<TramitesGobiernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramitesGobiernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TramitesGobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
