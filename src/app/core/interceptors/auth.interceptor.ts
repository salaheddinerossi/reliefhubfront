import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from "../authentication/authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.currentUserValue;
    let newHeaders = request.headers;

    if (currentUser && currentUser.token && currentUser.token.trim()) {
      newHeaders = newHeaders.set('Authorization', `Bearer ${currentUser.token}`);
    } else {
      newHeaders = newHeaders.delete('Authorization');
    }

    const authReq = request.clone({ headers: newHeaders });
    return next.handle(authReq);
  }
}
