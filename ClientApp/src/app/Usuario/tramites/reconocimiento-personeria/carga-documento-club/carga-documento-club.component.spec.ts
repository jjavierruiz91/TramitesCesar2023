import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocumentoClubComponent } from './carga-documento-club.component';

describe('CargaDocumentoClubComponent', () => {
  let component: CargaDocumentoClubComponent;
  let fixture: ComponentFixture<CargaDocumentoClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDocumentoClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocumentoClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
