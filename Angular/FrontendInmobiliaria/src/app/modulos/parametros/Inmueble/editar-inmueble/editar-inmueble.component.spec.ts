import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInmuebleComponent } from './editar-inmueble.component';

describe('EditarInmuebleComponent', () => {
  let component: EditarInmuebleComponent;
  let fixture: ComponentFixture<EditarInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
