import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
export interface Message {
  id: number;
  sender: string;
  snippet: string;
  time: Date;
}
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: Message[] = [
    { id: 1, sender: 'Jane Doe', snippet: 'Hey, how are you?', time: new Date() },
    { id: 2, sender: 'John Smith', snippet: 'Meeting at 10?', time: new Date() },

  ];
  constructor() { }
  getMessages(): Observable<Message[]> {
    return of(this.messages);
  }
}
