import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';
import { SearchService } from '../services/search.service';
import { NgForOf } from '@angular/common';
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent {
  searchTerm: string = ''; //  search term entered by the user
  searchResults: any[] = []; // search results fetched from the server
  filteredResults: any[] = []; // Holds the search results that match the selected category
  showFilterPanel: boolean = false;
  category: string = ''; // category that the user selects for filtering
  isLoggedIn$!: Observable<boolean>;
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private searchService: SearchService,
    private authService: AuthService,
  ) {}
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  logOut() {
    this.authService.logOut();
  }
  openCreatePostModal() {
    this.modalService.open(UploadPopupComponent);
  }

  navigateToAbout(): void {
    this.router.navigateByUrl('/about');
  }

  navigateToExplore(): void {
    this.router.navigateByUrl('/explore');
  }

  navigateToFavorites(): void {
    this.router.navigateByUrl('/favorites');
  }

  navigateToSignUp(): void {
    this.router.navigateByUrl('/user-signup');
  }

  navigateToLogin(): void {
    this.router.navigateByUrl('/user-login');
  }

  navigateToHomepage(): void {
    this.router.navigateByUrl('');
  }
  navigateToMyProfile(): void{
    this.router.navigateByUrl('/my-profile');
  }
  navigateToDirectMessages():void{
    this.router.navigateByUrl('/direct-messages');
  }
  fetchSearchResults(term: string): void {
    this.searchService.search(term).subscribe({
      next: (data) => {
        this.searchResults = data;
        // Update filteredResults with initial search results
        this.filteredResults = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  onSearchChange(): void {
    // Perform search when the user types in the search input field
    // You can optionally debounce the search to reduce API calls
    this.fetchSearchResults(this.searchTerm);
  }


  filterByCategory(category: string): void {
    this.filteredResults = this.searchResults.filter(result => result.category === category);
    // You can add more filter criteria as needed
  }


  // Method to apply filter
  showFilter: any;
  applyFilter(filterType: string, value: any): void {
    // Implement your filter logic here
    // For demonstration, assume you filter the results based on category
    this.filteredResults = this.searchResults.filter(result => result.category === value);
    // You can add more filter criteria as needed
  }

}
