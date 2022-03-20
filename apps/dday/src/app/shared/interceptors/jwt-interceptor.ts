import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../../_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: UserService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = this.authService.getLoggedUser;
    // add authorization header with jwt token if available
    // @ts-ignore
    if (user && user.token) {
      request = request.clone({
        setHeaders: {
          // @ts-ignore
          Authorization: `Bearer ${user.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
