import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UploadPopupComponent} from "../upload-popup/upload-popup.component";
import { SearchService} from "../services/search.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
  constructor(private router: Router, private modalService: NgbModal, private searchService: SearchService) {}

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

  searchResults: any[] = [];
  search(term: string): void {
    this.searchService.search(term).subscribe({
      next: (data) => {
        this.searchResults = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}
