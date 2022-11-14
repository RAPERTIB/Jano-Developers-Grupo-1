import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClienteComponent } from './update-cliente.component';

describe('UpdateClienteComponent', () => {
  let component: UpdateClienteComponent;
  let fixture: ComponentFixture<UpdateClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
