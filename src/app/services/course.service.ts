import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses() {
    return [
      {
        name: 'WDAI',
        ects: 3,
        semester: 3,
        maxStudents: 13,
        grade: 4,
        icon: 'https://cdn1.iconfinder.com/data/icons/laptop-vol-2/100/laptop28-512.png',
        description: 'wprodawdzenie do aplikacji internetowych',
        teachers: [{
          firstName: 'Jan',
          lastName: 'Kowalski',
          email: 'jk@teacher.pl',
          phone: 123456789,
          photo: 'https://c7.uihere.com/files/349/288/888/teacher-education-student-course-school-avatar.jpg',
          website: 'google.pl'
        }]
      },
      {
        name: 'TOIZO',
        ects: 5,
        semester: 5,
        maxStudents: 20,
        grade: 4,
        icon: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/programming-1528269-1297931.png',
        description: 'teoria oblicze i zlozonosci obliczeniowej',
        teachers: [{
          firstName: 'Jan',
          lastName: 'Kowalski',
          email: 'jk@teacher.pl',
          phone: 123456789,
          photo: 'https://c7.uihere.com/files/349/288/888/teacher-education-student-course-school-avatar.jpg',
          website: 'google.pl'
        }]
      },
      {
        name: 'TO',
        ects: 5,
        semester: 4,
        maxStudents: 15,
        grade: 5,
        icon: 'https://cdn2.iconfinder.com/data/icons/education-1-35/48/35-512.png',
        description: 'technologie obiektowe',
        teachers: [{
          firstName: 'Jan',
          lastName: 'Kowalski',
          email: 'jk@teacher.pl',
          phone: 123456789,
          photo: 'https://c7.uihere.com/files/349/288/888/teacher-education-student-course-school-avatar.jpg',
          website: 'google.pl'
        }]
      },
      {
        name: 'Bazy Danych',
        ects: 5,
        semester: 2,
        maxStudents: 33,
        grade: 3,
        icon: 'https://static.thenounproject.com/png/36146-200.png',
        description: 'bazy danych',
        teachers: [{
          firstName: 'Jan',
          lastName: 'Kowalski',
          email: 'jk@teacher.pl',
          phone: 123456789,
          photo: 'https://c7.uihere.com/files/349/288/888/teacher-education-student-course-school-avatar.jpg',
          website: 'google.pl'
        }]
      },
      {
        name: 'C++',
        ects: 4,
        semester: 1,
        maxStudents: 50,
        grade: 3,
        icon: 'https://cdn2.iconfinder.com/data/icons/knowledge-management/64/software-computer-hardware-program-process-system-512.png',
        description: 'wprodawdzenie do aplikacji internetowych',
        teachers: [{
          firstName: 'Jan',
          lastName: 'Kowalski',
          email: 'jk@teacher.pl',
          phone: 123456789,
          photo: 'https://c7.uihere.com/files/349/288/888/teacher-education-student-course-school-avatar.jpg',
          website: 'google.pl'
        }]
      },
      {
        name: 'SysOpy',
        ects: 4,
        semester: 4,
        maxStudents: 23,
        grade: 1,
        icon: 'https://cdn4.iconfinder.com/data/icons/programming-and-development-1-1/64/programming-and-development-09-512.png',
        description: 'wprodawdzenie do aplikacji internetowych',
        teachers: [{
          firstName: 'Jan',
          lastName: 'Kowalski',
          email: 'jk@teacher.pl',
          phone: 123456789,
          photo: 'https://c7.uihere.com/files/349/288/888/teacher-education-student-course-school-avatar.jpg',
          website: 'google.pl'
        }]
      },
      {
        name: 'Fizyka',
        ects: 6,
        semester: 2,
        maxStudents: 45,
        grade: 4,
        icon: 'https://static.thenounproject.com/png/281243-200.png',
        description: 'wprodawdzenie do aplikacji internetowych',
        teachers: [{
          firstName: 'Jan',
          lastName: 'Kowalski',
          email: 'jk@teacher.pl',
          phone: 123456789,
          photo: 'https://c7.uihere.com/files/349/288/888/teacher-education-student-course-school-avatar.jpg',
          website: 'google.pl'
        }]
      },
      {
        name: 'Algebra',
        ects: 5,
        semester: 1,
        maxStudents: 26,
        grade: 3,
        icon: 'https://cdn1.iconfinder.com/data/icons/content-copywriting-1/24/math_book_content_copywriting-512.png',
        description: 'wprodawdzenie do aplikacji internetowych',
        teachers: [{
          firstName: 'Jan',
          lastName: 'Kowalski',
          email: 'jk@teacher.pl',
          phone: 123456789,
          photo: 'https://c7.uihere.com/files/349/288/888/teacher-education-student-course-school-avatar.jpg',
          website: 'google.pl'
        }]
      },
      {
        name: 'Unixy',
        ects: 3,
        semester: 2,
        maxStudents: 10,
        grade: 4,
        icon: 'https://icon-library.net/images/android-settings-icon-png/android-settings-icon-png-27.jpg',
        description: 'wprodawdzenie do aplikacji internetowych',
        teachers: [{
          firstName: 'Jan',
          lastName: 'Kowalski',
          email: 'jk@teacher.pl',
          phone: 123456789,
          photo: 'https://c7.uihere.com/files/349/288/888/teacher-education-student-course-school-avatar.jpg',
          website: 'google.pl'
        }]
      },
      {
        name: 'Java',
        ects: 4,
        semester: 3,
        maxStudents: 20,
        grade: 5,
        icon: 'https://cdn0.iconfinder.com/data/icons/huge-basic-icons-part-3/512/Java.png',
        description: 'wprodawdzenie do aplikacji internetowych',
        teachers: [{
          firstName: 'Jan',
          lastName: 'Kowalski',
          email: 'jk@teacher.pl',
          phone: 123456789,
          photo: 'https://c7.uihere.com/files/349/288/888/teacher-education-student-course-school-avatar.jpg',
          website: 'google.pl'
        }]
      }
    ];
  }
}
