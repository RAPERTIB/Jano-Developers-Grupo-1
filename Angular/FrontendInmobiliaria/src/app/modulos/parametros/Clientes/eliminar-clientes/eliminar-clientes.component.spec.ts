import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarClientesComponent } from './eliminar-clientes.component';

describe('EliminarClientesComponent', () => {
  let component: EliminarClientesComponent;
  let fixture: ComponentFixture<EliminarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
