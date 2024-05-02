import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  standalone: true,
  imports: [NgForOf],
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  constructor(private searchService: SearchService) {}

  searchResults: any[] = [];
  search(term: string): void {
    this.searchService.search(term).subscribe({
      next: (data) => {
        this.searchResults = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
