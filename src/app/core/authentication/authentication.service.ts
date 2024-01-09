import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from "../../models/user.model";
import {Login} from "../../models/Login";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  constructor(private apiService: ApiService,private router:Router) {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  organizationLogin(login:Login): Observable<any> {
    return this.apiService.post<any>('auth/organization/login', login)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  adminLogin(login:Login): Observable<any> {
    return this.apiService.post<any>('auth/admin/login', login)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/'])
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

}
