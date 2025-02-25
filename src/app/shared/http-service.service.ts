import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  token:any;
  baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient, private storage: StorageService) { }


  post(endpoint:string, data:any){
    this.token = this.storage.getJson('user').access_token;  // Get JWT token from local storage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,  // Add Bearer token
      'Content-Type': 'application/json'   // Specify content type
    });
    return this.http.post(this.baseUrl + endpoint, data, { headers })
  }

  get(endpoint:string){
    this.token = this.storage.getJson('user').access_token;  // Get JWT token from local storage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,  // Add Bearer token
      'Content-Type': 'application/json'   // Specify content type
    });
    return this.http.get(this.baseUrl + endpoint, { headers })
  }

  update(endpoint:string, data:any){
    this.token = this.storage.getJson('user').access_token;  // Get JWT token from local storage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,  // Add Bearer token
      'Content-Type': 'application/json'   // Specify content type
    });
    return this.http.put(this.baseUrl + endpoint, data, { headers })
  }

  delete(endpoint:string){
    this.token = this.storage.getJson('user').access_token;  // Get JWT token from local storage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,  // Add Bearer token
      'Content-Type': 'application/json'   // Specify content type
    });
    return this.http.delete(this.baseUrl + endpoint, { headers })
  }

  patch(endpoint:string){
    this.token = this.storage.getJson('user').access_token;  // Get JWT token from local storage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,  // Add Bearer token
      'Content-Type': 'application/json'   // Specify content type
    });
    return this.http.patch(this.baseUrl + endpoint, { headers })
  }

}
