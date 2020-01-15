import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course.service';
import {Course} from '../../models/Course';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  coursename: string;
  course: Course;
  enrolled: boolean;
  canEnroll: boolean;
  rated: boolean;
  canRate: boolean;

  constructor(private courseService: CourseService, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
    this.coursename = route.snapshot.params['coursename'];
  }

  ngOnInit() {
    this.course = this.courseService.getCourse(this.coursename);
    this.isEnrolled();
    this.canEnroll = (!this.enrolled && this.course.maxStudents > 0);
    this.hasRated();
    this.canRate = (!this.rated && this.enrolled);
    console.log(this.canEnroll + ' ' + this.enrolled);
    console.log(this.canRate + ' ' + this.rated);
  }

  enroll() {
    this.authenticationService.userData.subscribe(user => {
      this.course.students.push(user.email);
      this.course.maxStudents--;
      this.courseService.updateCourseWithObject(this.course);
    });
  }

  isEnrolled() {
    this.enrolled = this.course.students.includes(this.authenticationService.getCurrentEmail());
  }

  hasRated() {
    this.rated = this.course.grades.includes(this.authenticationService.getCurrentEmail());
  }

}
