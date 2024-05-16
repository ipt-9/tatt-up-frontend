import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';
import { SearchService } from '../services/search.service';
import { NgForOf } from '@angular/common';
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";
import {LogoutConfirmationComponent} from "../logout-confirmation/logout-confirmation.component";
import {AppComponent} from "../app.component";

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

  //TEMPORARY  IMAGE DATA
  images = [
    { picture: 'assets/images/search1.png' },
    { picture: 'assets/images/search2.png' },
    { picture: 'assets/images/search3.png' },
    { picture: 'assets/images/search4.png' },
    { picture: 'assets/images/search5.png' },
    { picture: 'assets/images/search6.png' },
  ];

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
  openLogoutModal() {
    const modalRef = this.modalService.open(LogoutConfirmationComponent);
    modalRef.result.then((result) => {
      if (result) {
        this.authService.logOut();
      }
    }).catch(err => {
      console.error('Modal dismissed without logging out:', err);
    });
  }
  fetchSearchResults(term: string): void {

    //FOR TEMPORARY PLACEHOLDER IMAGES
    this.filteredResults = this.images;

    /* this.searchService.search(term).subscribe({
      next: (data: any[]) => {
        this.searchResults = data.map(item => ({
          ...item,
          picture: this.searchService.getPictureUrl(item.id) // Call getPictureUrl from searchService
        }));
        // Update filteredResults with initial search results
        this.filteredResults = this.searchResults;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
    */

  }

  getPictureUrl(itemId: string): string {
    // Implement logic to fetch picture URL based on item ID
    // Example: return `assets/images/${itemId}.jpg`;
    return `assets/images/${itemId}.jpg`; // Replace this with your actual implementation
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
