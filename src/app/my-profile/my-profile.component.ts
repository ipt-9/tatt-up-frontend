import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';
import {LogoutConfirmationComponent} from "../logout-confirmation/logout-confirmation.component";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-my-profiles',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  standalone: true
})
export class MyProfileComponent{
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private authService : AuthService,
  ) {}

  openCreatePostModal() {
    this.modalService.open(UploadPopupComponent);
  }
  navigateToSettings():void{
    this.router.navigateByUrl('/profile-settings');
  }
  navigateToSignUp(): void {
    this.router.navigateByUrl('/user-signup');
  }

  navigateToLogin(): void {
    this.router.navigateByUrl('/user-login');
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

  navigateToHomepage(): void {
    this.router.navigateByUrl('');
  }
  navigateToLegal():void{
    this.router.navigateByUrl('/legal');
  }
  navigateToDisclaimer():void{
    this.router.navigateByUrl('imprint');
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
  protected readonly open = open;
}


