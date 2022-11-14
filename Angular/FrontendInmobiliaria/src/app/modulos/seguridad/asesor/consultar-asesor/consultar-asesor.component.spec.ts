import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAsesorComponent } from './consultar-asesor.component';

describe('ConsultarAsesorComponent', () => {
  let component: ConsultarAsesorComponent;
  let fixture: ComponentFixture<ConsultarAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAsesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
