import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAdmComponent } from './crear-adm.component';

describe('CrearAdmComponent', () => {
  let component: CrearAdmComponent;
  let fixture: ComponentFixture<CrearAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
