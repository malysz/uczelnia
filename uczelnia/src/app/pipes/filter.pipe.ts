import { Pipe, PipeTransform } from '@angular/core';
import {element} from 'protractor';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: any, termName: any, termGrade: any, termSem: any, termEcts: any): any {
    if (termName === undefined) {
    } else {
      courses = courses.filter((course) => course.name.toLowerCase().includes(termName.toLowerCase()));
    }
    if (termGrade === undefined) {
    } else {
      const res = [];
      termGrade.split(',').forEach(grade => {
        for (const course of courses) {
          if (course.grade.toString().includes(grade)) {
            res.push(course);
          }
        }});
      courses = res;
    }
    if (termSem === undefined) {
    } else {
      const res = [];
      termSem.split(',').forEach(sem => {
        for (const course of courses) {
          if (course.semester.toString().includes(sem)) {
            res.push(course);
          }
        }});
      courses = res;
    }
    if (termEcts === undefined) {
    } else {
      const res = [];
      termEcts.split(',').forEach(ects => {
        for (const course of courses) {
          if (course.ects.toString().includes(ects)) {
            res.push(course);
          }
        }});
      courses = res;
    }
    return courses;
  }

}
