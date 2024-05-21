import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';
import {Observable} from "rxjs";
import {AuthService} from "../auth.service";
import {LogoutConfirmationComponent} from "../logout-confirmation/logout-confirmation.component";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  isLoggedIn$!: Observable<boolean>;
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private authService : AuthService,
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
    this.router.navigateByUrl('/user-profiles');
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
}
