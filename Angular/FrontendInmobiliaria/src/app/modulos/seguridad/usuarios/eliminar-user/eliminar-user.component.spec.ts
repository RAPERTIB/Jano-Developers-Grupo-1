import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarUserComponent } from './eliminar-user.component';

describe('EliminarUserComponent', () => {
  let component: EliminarUserComponent;
  let fixture: ComponentFixture<EliminarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
