import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearClientesComponent } from './crear-clientes.component';

describe('CrearClientesComponent', () => {
  let component: CrearClientesComponent;
  let fixture: ComponentFixture<CrearClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
