import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CourseService} from '../../services/course.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-add-course',
  templateUrl: './admin-add-course.component.html',
  styleUrls: ['./admin-add-course.component.css']
})
export class AdminAddCourseComponent implements OnInit {
  courseForm = new FormGroup({
    courseName: new FormControl('', Validators.required),
    courseIcon: new FormControl('', Validators.required),
    courseSemester: new FormControl('', Validators.required),
    courseEcts: new FormControl('', Validators.required),
    maxStudents: new FormControl('', Validators.required),
    courseGrade: new FormControl('', Validators.required),
  });

  addCourse() {
    this.courseService.addCourse(this.courseForm.value);
    this.router.navigate(['/admin']);
  }

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
  }

}
