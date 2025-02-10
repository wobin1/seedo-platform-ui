import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { QuizComponent } from './quiz/quiz.component';
import { CommunityComponent } from './community/community.component';

const routes: Routes = [
  {path: 'app', component: AppLayoutComponent, children: [
    {path: 'courses/:id', component: CourseComponent },
    {path: 'courses', component: CoursesComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'books', component: BookComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'community', component: CommunityComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
