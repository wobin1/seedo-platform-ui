import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-database',
  templateUrl: './manage-database.component.html',
  styleUrl: './manage-database.component.scss'
})
export class ManageDatabaseComponent {
  thumbnail = "assets/thumbnail.jpg"
  courses = [
    { "course_title": "JavaScript Basics", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail1.jpg" },
    { "course_title": "Advanced CSS Techniques", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail2.jpg" },
    { "course_title": "Python for Beginners", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail3.jpg" },
    { "course_title": "React Fundamentals", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail4.jpg" },
    { "course_title": "Data Structures in Java", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail5.jpg" },
    { "course_title": "Machine Learning with Python", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail6.jpg" }
  ];

}
