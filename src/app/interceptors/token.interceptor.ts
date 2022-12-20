/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenApi = sessionStorage.getItem('access_token');

    if (tokenApi) {
      req = req.clone({
        setHeaders: this.getOptions(req),
      });
    }

    return next.handle(req);
  }

  getOptions(req: HttpRequest<any>): any {
    const tokenApi = sessionStorage.getItem('access_token');
    const isFormData = req.body instanceof FormData;
    if (isFormData) {
      return {
        'Content-type': 'application/json',

        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${tokenApi}`,
      };
    }

    return {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${tokenApi}`,
    };
  }
}
