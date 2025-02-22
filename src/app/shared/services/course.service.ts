import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private api:HttpServiceService){}


    getCourses(): Observable<any>{
      return this.api.get('courses/').pipe(map(res => res))
    }

    getSingleCourse(id:any): Observable<any>{
      return this.api.get('courses/' + id).pipe(map(res => res))
    }

    createCourse(courseData:any): Observable<any>{
      return this.api.post('courses/create/', courseData).pipe(map(res => res))
    }





}


