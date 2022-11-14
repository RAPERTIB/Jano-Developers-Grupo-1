import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFacturacionComponent } from './crear-facturacion.component';

describe('CrearFacturacionComponent', () => {
  let component: CrearFacturacionComponent;
  let fixture: ComponentFixture<CrearFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFacturacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
