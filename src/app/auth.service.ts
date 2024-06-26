// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Event } from 'src/app/models/event.model';
import { User } from 'src/app/models/user.model';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public apiUrl = 'https://backend.tatt-up-bmsd21a.bbzwinf.ch/api';
  private isLoggedInStatus = new BehaviorSubject<boolean>(this.hasToken());
  constructor(private http: HttpClient) {}
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
  private hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInStatus.asObservable();
  }

  // Sign up a new user
  signUp(userData: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/register`, userData)
      .pipe(catchError(this.handleError<any>('signUp')));
  }

  logIn(loginData: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, loginData)
      .pipe(
        tap(response => {
          localStorage.setItem('auth_token', response.token);
          this.isLoggedInStatus.next(true);
        }),
        catchError(this.handleError<any>('logIn'))
      );
  }

  logOut(): void {
    localStorage.removeItem('auth_token');
    this.isLoggedInStatus.next(false);
  }

  checkEmailExists(email: string): Observable<boolean> {
    return this.http
      .get<{exists : boolean}>(`${this.apiUrl}/checkEmailExists`, {params: {email}})
      .pipe(
        map(response => response.exists),
        catchError(this.handleError<boolean>('checkEmailExists', false))
      );
  }

  checkUsernameExists(username: string): Observable<boolean> {
    return this.http
      .get<boolean>(`${this.apiUrl}/checkUsernameExists/${username}`)
      .pipe(catchError(this.handleError<boolean>('checkUsernameExists', false)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(() => error);
    };
  }
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/events`);
  }

  saveEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.apiUrl}/events`, event);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
}
