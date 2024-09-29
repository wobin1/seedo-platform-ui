import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {

  open = false
  currentId=0

  course = [
    {"id":1,"title": "Darasi 01", "image": 'assets/thumbnail6.jpg'},
    {"id":2,"title": "Darasi 01", "image": 'assets/thumbnail2.jpg'},
    {"id":3,"title": "Darasi 01", "image": 'assets/thumbnail4.jpg'}
  ]

  courses = [
    { "course_title": "fadada harkar noma", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail6.jpg" },
    { "course_title": "Kasuwancin noma", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail2.jpg" },
    { "course_title": "Kimiyyar Shuka", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail3.jpg" },
  ]

  openChapter(id:number){
    this.open = !this.open;
    this.currentId = id;
  }

  // closeChapter(){
  //   this.open = false;
  //   this.currentId = 0;
  // }

}
