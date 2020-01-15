import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../models/Course';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-course-grade',
  templateUrl: './course-grade.component.html',
  styleUrls: ['./course-grade.component.css']
})
export class CourseGradeComponent implements OnInit {
  @Input() course: Course;
  @Input() canRate: boolean;

  gradeForm = new FormGroup({
    newGrade: new FormControl('')
  });

  constructor(private courseService:CourseService, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  addGrade() {
    const counter = this.course.grades.length;
    this.course.grade = Math.round(((this.course.grade * counter) + Number(this.gradeForm.value.newGrade)) / (counter + 1));
    this.course.grades.push(this.authenticationService.getCurrentEmail());
    this.courseService.updateCourseWithObject(this.course);
  }

}
