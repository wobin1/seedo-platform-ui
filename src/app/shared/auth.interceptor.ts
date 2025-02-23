import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storage: StorageService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.storage.getJson('user'); // Get token from storage

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token.access_token}`
        }
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
