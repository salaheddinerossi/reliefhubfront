import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorHandlerService } from './error-handling/global-error-handler.service';
import { AuthenticationService } from './authentication/authentication.service';
import { ApiService } from './api/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import {LoggingInterceptor} from "./interceptors/logging.interceptor";

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    ApiService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }


  ]
})
export class CoreModule { }
