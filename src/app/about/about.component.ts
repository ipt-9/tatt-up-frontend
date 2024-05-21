import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Observable} from "rxjs";
import {AuthService} from "../auth.service";
import {LogoutConfirmationComponent} from "../logout-confirmation/logout-confirmation.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
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
  protected readonly open = open;
}
