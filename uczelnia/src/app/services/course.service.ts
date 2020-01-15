import {Injectable} from '@angular/core';
import {Course} from '../models/Course';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[];
  url = 'http://localhost:4000/api';

  constructor(private http: HttpClient, private router: Router) {
  }

  getCourse(name) {
    this.courses = this.getCourses();
    return this.courses.filter(c => c.name === name).pop();
  }

  addCourse(courseForm) {
    const course = {
      name: courseForm.courseName,
      ects: courseForm.courseEcts,
      semester: courseForm.courseSemester,
      maxStudents: courseForm.maxStudents,
      grade: courseForm.courseGrade,
      icon: courseForm.courseIcon,
      students: [],
      grades: []
    };
    this.http.post(this.url + '/course', course).subscribe(value => {
        console.log('POST added course to db ', value);
        this.courses.push(course);
      },
      response => {
        console.log('POST failed to add course to db');
      },
      () => {
        console.log('The POST observable is now completed.');
        this.router.navigate(['/admin']);
      });
  }

  updateCourse(courseForm, coursename) {
    const course = {
      name: courseForm.courseName,
      ects: courseForm.courseEcts,
      semester: courseForm.courseSemester,
      maxStudents: courseForm.maxStudents,
      grade: courseForm.courseGrade,
      icon: courseForm.courseIcon,
      students: this.courses[this.courses.findIndex(c => c.name === courseForm.courseName)].students,
      grades: this.courses[this.courses.findIndex(c => c.name === courseForm.courseName)].grades
    };

    this.http.put(this.url + '/course/' + coursename, course).subscribe(value => {
        console.log('PUT updated course in db ', value);
        this.courses[this.courses.findIndex(c => c.name === course.name)] = course;
      },
      response => {
        console.log('PUT failed to update course in db');
      },
      () => {
        console.log('The PUT observable is now completed.');
        this.router.navigate(['/admin']);
      });
  }

  deleteCourse(course) {
    console.log(course.name);
    this.http.delete(this.url + '/course/' + course.name).subscribe(value => {
      console.log('DELETE course from db successfullfy', value);
      this.courses = this.courses.filter(c => c.name !== course.name);
    },
    response => {
      console.log('Failed to DELETE course from db');
    },
      () => {
      console.log('DELETE observable is now completed.');
      });
  }

  getCourses() {
    this.http.get<Course[]>(this.url + '/courses').subscribe(courses => this.courses = courses);
    return this.courses;
  }

  updateCourseWithObject(course) {
    this.http.put(this.url + '/course/' + course.name, course).subscribe(value => {
        console.log('PUT updated course in db ', value);
        this.courses[this.courses.findIndex(c => c.name === course.name)] = course;
      },
      response => {
        console.log('PUT failed update course in db');
      },
      () => {
        console.log('The PUT observable is now completed.');
        this.router.navigate(['/courses']);
      });
  }
}
