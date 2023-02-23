import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElimFuncionarioGobiernoComponent } from './edit-elim-funcionario-gobierno.component';

describe('EditElimFuncionarioGobiernoComponent', () => {
  let component: EditElimFuncionarioGobiernoComponent;
  let fixture: ComponentFixture<EditElimFuncionarioGobiernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElimFuncionarioGobiernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElimFuncionarioGobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
