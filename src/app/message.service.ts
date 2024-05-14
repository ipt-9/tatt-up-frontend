import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import { Message } from 'src/app/models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  getMessages(receiverId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.authService.apiUrl}/messages/${receiverId}`);
  }
  sendMessage(receiverId: number, message: string): Observable<Message> {
    return this.http.post<Message>(`${this.authService.apiUrl}/messages/send`, { receiverId, message });
  }
}
