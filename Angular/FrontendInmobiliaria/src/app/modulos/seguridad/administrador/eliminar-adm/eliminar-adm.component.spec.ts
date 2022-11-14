import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAdmComponent } from './eliminar-adm.component';

describe('EliminarAdmComponent', () => {
  let component: EliminarAdmComponent;
  let fixture: ComponentFixture<EliminarAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
