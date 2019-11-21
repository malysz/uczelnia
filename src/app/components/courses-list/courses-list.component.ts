import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/Course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.courses = this.courseService.getCourses();
  }

  deleteCourse(course: Course) {
    this.courses = this.courses.filter(c => c.name !== course.name);
  }

}
