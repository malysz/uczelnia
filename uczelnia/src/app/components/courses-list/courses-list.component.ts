import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/Course';
import { CourseService } from '../../services/course.service';
import { FilterPipe} from '../../pipes/filter.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: Course[];
  termName: string;
  termSem: number;
  termGrade: number;
  termEcts: number;
  collapse = false;
  page = 0;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.courses = this.courseService.getCourses();
  }

  toggle() {
    this.collapse = !this.collapse;
    const content = document.getElementById('filter');
    if ( content.style.maxHeight ) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }

  nextPage() {
    if (this.page < this.courses.length ) {
      this.page += 5;
    }
  }

  previousPage() {
    if (this.page !== 0 ) {
      this.page -= 5;
    }
  }
}
