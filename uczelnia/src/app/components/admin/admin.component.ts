import { Component, OnInit } from '@angular/core';
import {Course} from '../../models/Course';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  termName: string;
  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.courses = this.courseService.getCourses();
  }

  deleteCourse(course: Course) {
    this.courseService.deleteCourse(course);
    this.courses = this.courses.filter(c => c.name !== course.name);
    return this.courses;
  }

}
