import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRoutesComponent } from './vehicle-routes.component';

describe('VehicleRoutesComponent', () => {
  let component: VehicleRoutesComponent;
  let fixture: ComponentFixture<VehicleRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
