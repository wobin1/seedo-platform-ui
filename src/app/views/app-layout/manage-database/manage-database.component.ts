import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-database',
  templateUrl: './manage-database.component.html',
  styleUrl: './manage-database.component.scss'
})
export class ManageDatabaseComponent {
  thumbnail = "assets/thumbnail.jpg"
  courses = [
    { "course_title": "Noma mai dorewa", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail1.jpg" },
    { "course_title": "Kasuwancin noma", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail2.jpg" },
    { "course_title": "Kimiyyar Shuka", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail3.jpg" },
    { "course_title": "Kimiyyar k'asa", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail4.jpg" },
    { "course_title": "Tattalin Arzikin Noma", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail5.jpg" },
    { "course_title": "fadada harkar noma", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail6.jpg" }
  ];

}
