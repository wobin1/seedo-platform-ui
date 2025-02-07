import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private api:HttpServiceService){}


      getCourses(): Observable<any>{
        return this.api.get('blog/').pipe(map(res => res))
      }

      getSingleCourse(id:any): Observable<any>{
        return this.api.get('blog/' + id).pipe(map(res => res))
      }

      createCourse(courseData:any): Observable<any>{
        return this.api.post('blog/', courseData).pipe(map(res => res))
      }

}
