import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getComments(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.authService.apiUrl}/posts/${postId}/comments`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    }).pipe(
      catchError(error => {
        console.error('Error in fetching comments', error);
        throw 'Error in fetching comments: ' + error;
      })
    );
  }


  addComment(postId: number, body: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.http.post(`${this.authService.apiUrl}/posts/${postId}/comments`, { body }, { headers })
      .pipe(
        catchError(error => {
          console.error('Error in adding comment', error);
          throw 'Error in adding comment: ' + error;
        })
      );
  }
}
