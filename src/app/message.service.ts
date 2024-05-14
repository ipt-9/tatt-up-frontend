import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import { Message } from 'src/app/models/message.model';
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.authService.apiUrl}/messages`);
  }

  sendMessage(messageData: {receiver_id: number; message: string}): Observable<any> {
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

}
