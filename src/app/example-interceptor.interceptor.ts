import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExampleInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userToken = 'secure-user-token';
    const modifiedReq = request.clone();
    console.log(modifiedReq)
    return next.handle(request.clone({ 
      headers: request.headers.set('Authorization', `Bearer ${userToken}`),
    }));    
  }
}
