import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';
import { StorageService } from './storage.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient, private storage: StorageService) { }


  signup(data:any){
    return this.http.post(this.baseUrl + 'users/register/', data).pipe(
      retry(3)
    )
  }

  login(data:any){
    return this.http.post(this.baseUrl + 'users/login/', data).pipe(
      retry(3)
    )
  }

  logout(){
    return this.http.get(this.baseUrl + 'auth/logout').pipe(
      retry(3)
    )
  }

  getJwtToken(){
    return this.storage.getdata('jwt_token')
  }


}
