import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInmuebleComponent } from './listar-inmueble.component';

describe('ListarInmuebleComponent', () => {
  let component: ListarInmuebleComponent;
  let fixture: ComponentFixture<ListarInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
