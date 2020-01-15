import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { CourseService} from '../../services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseForm = new FormGroup({
    courseName: new FormControl('', Validators.required),
    courseIcon: new FormControl('', Validators.required),
    courseSemester: new FormControl('', Validators.required),
    courseEcts: new FormControl('', Validators.required),
    maxStudents: new FormControl('', Validators.required),
    courseGrade: new FormControl('', Validators.required)
  });

  addCourse() {
    console.log(this.courseForm.value);
    this.courseService.addCourse(this.courseForm.value);
  }

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }
}
