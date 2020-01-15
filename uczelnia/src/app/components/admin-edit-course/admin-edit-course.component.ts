import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Course} from '../../models/Course';

@Component({
  selector: 'app-admin-edit-course',
  templateUrl: './admin-edit-course.component.html',
  styleUrls: ['./admin-edit-course.component.css']
})
export class AdminEditCourseComponent implements OnInit {
  coursename: string;
  course: Course;

  courseForm = new FormGroup({
    courseName: new FormControl(''),
    courseIcon: new FormControl(''),
    courseSemester: new FormControl(''),
    courseEcts: new FormControl(''),
    courseDescription: new FormControl(''),
    maxStudents: new FormControl(''),
    courseGrade: new FormControl(''),
  });

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) {
    this.coursename = route.snapshot.params['coursename'];
  }

  ngOnInit() {
    this.getCourse(this.coursename);
  }

  getCourse(coursename) {
    this.course = this.courseService.getCourse(coursename);
  }

  updateCourse() {
    this.courseForm.value.courseName = this.courseForm.controls.courseName.value.length === 0 ?
      this.course.name : this.courseForm.controls.courseName.value;
    this.courseForm.value.courseIcon = this.courseForm.controls.courseIcon.value.length === 0 ?
      this.course.icon : this.courseForm.controls.courseIcon.value;
    this.courseForm.value.courseSemester = this.courseForm.controls.courseSemester.value.length === 0 ?
      this.course.semester : this.courseForm.controls.courseSemester.value;
    this.courseForm.value.courseEcts = this.courseForm.controls.courseEcts.value.length === 0 ?
      this.course.ects : this.courseForm.controls.courseEcts.value;
    this.courseForm.value.maxStudents = this.courseForm.controls.maxStudents.value.length === 0 ?
      this.course.maxStudents : this.courseForm.controls.maxStudents.value;
    this.courseForm.value.courseGrade = this.courseForm.controls.courseGrade.value.length === 0 ?
      this.course.grade : this.courseForm.controls.courseGrade.value;
    this.courseService.updateCourse(this.courseForm.value, this.coursename);
  }

}
