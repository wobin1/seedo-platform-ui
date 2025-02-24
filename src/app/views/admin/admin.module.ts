import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogComponent } from './blog/blog.component';
import { MarketComponent } from './market/market.component';
import { SharedModule } from '../../shared/shared.module';
import { PrimengModule } from '../../primeng/primeng.module';
import { CreateBlogComponent } from './create-blog/create-blog.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    CoursesComponent,
    BlogComponent,
    MarketComponent,
    CreateBlogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    PrimengModule
  ]
})
export class AdminModule { }
