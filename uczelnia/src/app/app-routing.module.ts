import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseDetailsComponent} from './components/course-details/course-details.component';
import {AppComponent} from './app.component';
import {CoursesListComponent} from './components/courses-list/courses-list.component';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AuthGuard} from './guards/auth.guard';
import {AdminComponent} from './components/admin/admin.component';
import {AdminAddCourseComponent} from './components/admin-add-course/admin-add-course.component';
import {AdminEditCourseComponent} from './components/admin-edit-course/admin-edit-course.component';
import {AdminGuard} from './guards/admin.guard';


const routes: Routes = [
  { path: 'courses/course-details/:coursename', component: CourseDetailsComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: CoursesListComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'admin/add-course', component: AdminAddCourseComponent, canActivate: [AdminGuard] },
  { path: 'admin/edit-course/:coursename', component: AdminEditCourseComponent, canActivate: [AdminGuard] },
  { path: '', component: AuthenticationComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
