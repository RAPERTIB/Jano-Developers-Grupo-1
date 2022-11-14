import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPassComponent } from './asignar-pass.component';

describe('AsignarPassComponent', () => {
  let component: AsignarPassComponent;
  let fixture: ComponentFixture<AsignarPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
