import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';
import { SearchService } from '../services/search.service';
import { NgForOf } from '@angular/common';
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";
import {LogoutConfirmationComponent} from "../logout-confirmation/logout-confirmation.component";
import {AppComponent} from "../app.component";
import { IDropdownSettings } from 'ng-multiselect-dropdown';


interface DropdownItem {
  item_id: number;
  item_text: string;
}

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExploreComponent {
  searchTerm: string = ''; //  search term entered by the user
  searchResults: any[] = []; // search results fetched from the server
  filteredResults: any[] = []; // Holds the search results that match the selected category
  showFilterPanel: boolean = false;
  category: string = ''; // category that the user selects for filtering
  selectedCategories: any[] = [];
  isLoggedIn$!: Observable<boolean>;
  dropdownList: DropdownItem[] = [];
  dropdownSettings: IDropdownSettings = {};

  //TEMPORARY  IMAGE DATA
  images = [
    { picture: 'assets/images/search1.png', category: 'Fineline' },
    { picture: 'assets/images/search2.png', category: 'Fineline'},
    { picture: 'assets/images/search3.png', category: 'Fineline'},
    { picture: 'assets/images/search4.png', category: 'Coquette' },
    { picture: 'assets/images/search5.png', category: 'Coquette' },
    { picture: 'assets/images/search6.png', category: 'Futuristic'},
  ];

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private searchService: SearchService,
    private authService: AuthService,
  ) {}


  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn();
    this.dropdownList = [
      { item_id: 1, item_text: 'Fineline' },
      { item_id: 2, item_text: 'Coquette' },
      { item_id: 3, item_text: 'Futuristic' },
      { item_id: 4, item_text: 'Minimalistic' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }

  logOut() {
    this.authService.logOut();
  }
  openCreatePostModal() {
    this.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.modalService.open(UploadPopupComponent);
      } else {
        alert('You first have to log in to be able to upload a post.');
      }
    });
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
    this.router.navigateByUrl('user-profiles');
  }
  navigateToDirectMessages():void{
    this.router.navigateByUrl('/direct-messages');
  }
  navigateToOpenPost():void{
    this.router.navigateByUrl('/open-post');
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
    this.filteredResults = this.images.filter(image => {
      // Assuming each image has a property 'category'
      return image.category === category;
    });
    this.category = category;
  }
  onItemDeSelect(item: any) {
    this.filterResults();
  }

  onItemSelect(item: any) {
    this.filterResults();
  }

  onDeSelect(item: any) {
    this.filterResults();
  }

  onSelectAll(items: any) {
    this.filterResults();
  }

  onDeSelectAll(items: any) {
    this.filterResults();
  }

  filterResults() {
    if (this.selectedCategories.length > 0) {
      const selectedCategoryNames = this.selectedCategories.map(cat => cat.item_text);
      this.filteredResults = this.images.filter(image => selectedCategoryNames.includes(image.category));
    } else {
      this.filteredResults = this.images;
    }
  }

  removeCategory(category: any) {
    this.selectedCategories = this.selectedCategories.filter(cat => cat.item_id !== category.item_id);
    this.filterResults();
  }

  clearFilter(): void {
    this.filteredResults = this.images;
    this.selectedCategories = [];
  }

  toggleDropdown() {
    // Logic to toggle dropdown if needed
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
