import { Component } from '@angular/core';
import { CourseService } from '../../../shared/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses:any;
  IgboCourses:any;
  YorubaCourses:any;

  constructor(private courseService:CourseService){}

  ngOnInit(){
    // this.courses = [
    //   { "course_title": "Noma mai dorewa", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail1.jpg" },
    //   { "course_title": "Kasuwancin noma", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail2.jpg" },
    //   { "course_title": "Kimiyyar Shuka", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail3.jpg" },
    //   { "course_title": "Kimiyyar k'asa", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail4.jpg" },
    //   { "course_title": "Tattalin Arzikin Noma", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail5.jpg" },
    //   { "course_title": "fadada harkar noma", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail6.jpg" }
    // ];

    this.getCourses()
  }


  getCourses(){
    this.courseService.getCourses().subscribe(
      res=>{
        this.courses = res;
        console.log(this.courses)
      }, err=>{
        console.log(err)
      }
    )
  }

}
