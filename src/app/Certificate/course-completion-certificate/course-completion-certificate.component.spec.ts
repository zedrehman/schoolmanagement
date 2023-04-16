import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCompletionCertificateComponent } from './course-completion-certificate.component';

describe('CourseCompletionCertificateComponent', () => {
  let component: CourseCompletionCertificateComponent;
  let fixture: ComponentFixture<CourseCompletionCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCompletionCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCompletionCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
