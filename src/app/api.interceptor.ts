import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    if (request.method === 'GET') {
      const newRequest = request.clone({
        headers: new HttpHeaders().set('apiKey', 'sdffdkghkjfdh')
      });
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }

  }
}
