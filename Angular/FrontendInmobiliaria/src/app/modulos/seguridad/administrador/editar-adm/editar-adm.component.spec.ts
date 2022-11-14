import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAdmComponent } from './editar-adm.component';

describe('EditarAdmComponent', () => {
  let component: EditarAdmComponent;
  let fixture: ComponentFixture<EditarAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
