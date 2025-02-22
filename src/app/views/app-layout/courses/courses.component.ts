import { Component } from '@angular/core';
import { CourseService } from '../../../shared/services/course.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses:any;
  IgboCourses:any;
  YorubaCourses:any;
  createCourse:boolean = false;
  createAuthor:boolean = false;
  cities: any;

  selectedCities:any;

  constructor(private courseService:CourseService, private router:Router, private fb:FormBuilder){}


    ngOnInint(){}

    route(page:string){
      this.router.navigate([page]);
    }



    showCreateCourseDialog() {
        this.createCourse = true;
        this.createAuthor = false;
    }

    showCreateAuthoDialog() {
      this.createCourse = false;
      this.createAuthor = true;
  }


  ngOnInit(){
    this.cities = [
      {name: 'Nathaniel Musa', code: 'NY'},
      {name: 'Jon Doe', code: 'RM'},
      {name: 'Jane Rode', code: 'LDN'},
      {name: 'Peter Tem', code: 'IST'},
      {name: 'Joice James', code: 'PRS'}
  ];

    this.getCourses()
  }


  getCourses(){
    this.courseService.getCourses().subscribe(
      res=>{
        this.courses = res;
        console.log('fetched courses', this.courses)
      }, err=>{
        console.log(err)
      }
    )
  }

}
