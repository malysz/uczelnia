import { Teacher } from './Teacher';

export interface Course {
  name: string;
  ects: number;
  semester: number;
  maxStudents: number;
  grade: number;
  icon: string;
  description: string;
  teachers: Teacher[];
}
