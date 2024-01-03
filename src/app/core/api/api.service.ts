import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from "../../../environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private setHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getAuthToken()}`
    });
    return headers;
  }

  private getAuthToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  get<T>(endpoint: string, params?: HttpParams | {[param: string]: string | string[]}): Observable<T> {
    return this.http.get<T>(this.baseUrl + endpoint, { headers: this.setHeaders(), params })
      .pipe(catchError(this.handleError));
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(this.baseUrl + endpoint, body, { headers: this.setHeaders() })
      .pipe(catchError(this.handleError));
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(this.baseUrl + endpoint, body, { headers: this.setHeaders() })
      .pipe(catchError(this.handleError));
  }

  patch<T>(endpoint: string, body: any): Observable<T> {
    return this.http.patch<T>(this.baseUrl + endpoint, body, { headers: this.setHeaders() })
      .pipe(catchError(this.handleError));
  }


  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(this.baseUrl + endpoint, { headers: this.setHeaders() })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('API error occurred:', error);
    throw error;
  }
}
