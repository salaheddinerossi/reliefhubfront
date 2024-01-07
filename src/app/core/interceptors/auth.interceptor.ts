import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from "../authentication/authentication.service";
import {environment} from "../../../environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.currentUserValue;

    const authReq = request.clone({
      headers: request.headers.set('Authorization', currentUser && currentUser.token ? `Bearer ${currentUser.token}` : '')
    });

    if (request.url.startsWith(environment.apiUrl)) {
      return next.handle(authReq);
    }

    return next.handle(request);
  }
}
