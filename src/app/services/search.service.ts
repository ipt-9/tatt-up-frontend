import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl =
    'https://backend.tatt-up-bmsd21a.bbzwinf.ch/api/posts/search';

  constructor(private http: HttpClient) {}

  search(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?term=${encodeURIComponent(term)}`).pipe(
      map((data: any[]) => {
        return data.map(item => ({
          ...item,
          picture: this.getPictureUrl(item.id) // Assuming each item has an 'id' property
        }));
      })
    );
  }

  getPictureUrl(itemId: string): string {
    // Implement logic to fetch picture URL based on item ID
    // Example: return `assets/images/${itemId}.jpg`;
    return `assets/images/${itemId}.jpg`; // Replace this with your actual implementation
  }
}
