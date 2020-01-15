import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../models/Course';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css']
})
export class AdminCourseComponent implements OnInit {
  @Input() course: Course;
  @Input() isEven: boolean;
  @Output() deleteCourse: EventEmitter<Course> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(course) {
    this.deleteCourse.emit(course);
  }
}
