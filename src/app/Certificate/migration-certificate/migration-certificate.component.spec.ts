import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationCertificateComponent } from './migration-certificate.component';

describe('MigrationCertificateComponent', () => {
  let component: MigrationCertificateComponent;
  let fixture: ComponentFixture<MigrationCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
