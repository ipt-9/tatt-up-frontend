import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://backend.tatt-up-bmsd21a.bbzwinf.ch/api';

  constructor(private http: HttpClient) { }

  // Sign up a new user
  signUp(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData).pipe(
      catchError(this.handleError<any>('signUp'))
    );
  }

  // Handle HTTP errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Optionally, you can log the error to a logging service
      // Return an empty result or throw an error depending on your application's requirements
      return of(result as T);
    };
  }
}
