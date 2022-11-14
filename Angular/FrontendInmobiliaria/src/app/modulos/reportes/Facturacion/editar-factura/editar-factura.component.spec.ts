import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFacturaComponent } from './editar-factura.component';

describe('EditarFacturaComponent', () => {
  let component: EditarFacturaComponent;
  let fixture: ComponentFixture<EditarFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
