import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Message } from 'src/app/models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  getMessages(username: string): Observable<Message[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.get<Message[]>(`${this.authService.apiUrl}/messages/${username}`, { headers })
      .pipe(catchError(error => {
        console.error('Failed to fetch messages', error);
        return throwError(() => new Error('Failed to fetch messages'));
      }));
  }

  sendMessage(messageData: { receiver_username: string; message: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.post(`${this.authService.apiUrl}/messages`, messageData, { headers })
      .pipe(
        catchError(error => {
          console.error('Failed to send message', error);
          return throwError(() => new Error('Failed to send message'));
        })
      );
  }
  getConversations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.authService.apiUrl}/conversations`).pipe(
      tap(conversations => console.log('Fetched conversations:', conversations)),
      catchError(error => {
        console.error('Failed to fetch conversations', error);
        return throwError(() => new Error('Failed to fetch conversations'));
      })
    );
  }



}
