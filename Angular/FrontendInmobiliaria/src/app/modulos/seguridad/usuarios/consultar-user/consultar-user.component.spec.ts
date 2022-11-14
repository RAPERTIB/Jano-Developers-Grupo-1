import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarUserComponent } from './consultar-user.component';

describe('ConsultarUserComponent', () => {
  let component: ConsultarUserComponent;
  let fixture: ComponentFixture<ConsultarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
