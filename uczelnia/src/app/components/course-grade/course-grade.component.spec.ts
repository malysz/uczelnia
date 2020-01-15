import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGradeComponent } from './course-grade.component';

describe('CourseGradeComponent', () => {
  let component: CourseGradeComponent;
  let fixture: ComponentFixture<CourseGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
