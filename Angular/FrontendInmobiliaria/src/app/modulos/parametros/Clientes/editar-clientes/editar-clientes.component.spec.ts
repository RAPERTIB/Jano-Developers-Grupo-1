import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClientesComponent } from './editar-clientes.component';

describe('EditarClientesComponent', () => {
  let component: EditarClientesComponent;
  let fixture: ComponentFixture<EditarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
