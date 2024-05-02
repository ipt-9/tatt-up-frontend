import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl =
    'https://backend.tatt-up-bmsd21a.bbzwinf.ch/api/posts/search';

  constructor(private http: HttpClient) {}

  search(term: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?term=${encodeURIComponent(term)}`);
  }
}
