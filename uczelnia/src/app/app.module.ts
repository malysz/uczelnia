import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CourseComponent } from './components/course/course.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseGradeComponent } from './components/course-grade/course-grade.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { AuthenticationService } from './services/authentication.service';
import {environment} from '../environments/environment';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminCourseComponent } from './components/admin-course/admin-course.component';
import { AdminAddCourseComponent } from './components/admin-add-course/admin-add-course.component';
import { AdminEditCourseComponent } from './components/admin-edit-course/admin-edit-course.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseComponent,
    FilterPipe,
    CourseFormComponent,
    CourseGradeComponent,
    CourseDetailsComponent,
    AuthenticationComponent,
    MenuComponent,
    PageNotFoundComponent,
    AdminComponent,
    AdminCourseComponent,
    AdminAddCourseComponent,
    AdminEditCourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
