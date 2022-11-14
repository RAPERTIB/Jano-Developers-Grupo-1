import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAdmComponent } from './consultar-adm.component';

describe('ConsultarAdmComponent', () => {
  let component: ConsultarAdmComponent;
  let fixture: ComponentFixture<ConsultarAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
