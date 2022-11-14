import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarClienteComponent } from './eliminar-cliente.component';

describe('EliminarClienteComponent', () => {
  let component: EliminarClienteComponent;
  let fixture: ComponentFixture<EliminarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
