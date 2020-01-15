import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Course} from '../../models/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Input() isEven: boolean;

  constructor() { }

  ngOnInit() {
  }

}
