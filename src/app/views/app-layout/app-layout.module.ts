import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutComponent } from './app-layout.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { SharedModule } from '../../shared/shared.module';
import { ManageDatabaseComponent } from './manage-database/manage-database.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppLayoutComponent,
    CoursesComponent,
    CourseComponent,
    ManageDatabaseComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    SharedModule
  ]
})
export class AppLayoutModule { }
