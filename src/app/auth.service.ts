//auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://backend.tatt-up-bmsd21a.bbzwinf.ch/api';

  constructor(private http: HttpClient) {}

  // Sign up a new user
  signUp(userData: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/register`, userData)
      .pipe(catchError(this.handleError<any>('signUp')));
  }

  logIn(loginData: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, loginData)
      .pipe(catchError(this.handleError<any>('logIn')));
  }
  checkEmailExists(email: string): Observable<boolean> {
    return this.http
      .get<{exists : boolean}>(`${this.apiUrl}/checkEmailExists`, {params: {email}})
      .pipe(
        map(response => response.exists),
    catchError(this.handleError<boolean>('checkEmailExists', false)));
  }

  checkUsernameExists(username: string): Observable<boolean> {
    return this.http
      .get<boolean>(`${this.apiUrl}/checkUsernameExists/${username}`)
      .pipe(
        catchError(this.handleError<boolean>('checkUsernameExists', false)),
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by rethrowing the error
      return throwError(() => error);
    };
  }
}
