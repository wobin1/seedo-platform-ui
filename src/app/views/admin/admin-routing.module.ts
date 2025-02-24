import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogComponent } from './blog/blog.component';
import { MarketComponent } from './market/market.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, children:[
    { path: 'users', component: UsersComponent},
    { path: 'courses', component: CoursesComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'create-blog', component: CreateBlogComponent},
    { path: 'market', component: MarketComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
