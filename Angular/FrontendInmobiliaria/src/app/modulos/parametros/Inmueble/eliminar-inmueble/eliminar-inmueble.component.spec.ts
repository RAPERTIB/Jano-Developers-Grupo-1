import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarInmuebleComponent } from './eliminar-inmueble.component';

describe('EliminarInmuebleComponent', () => {
  let component: EliminarInmuebleComponent;
  let fixture: ComponentFixture<EliminarInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
