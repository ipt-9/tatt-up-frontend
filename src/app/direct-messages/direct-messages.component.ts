import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../auth.service";
import {UploadPopupComponent} from "../upload-popup/upload-popup.component";
import {LogoutConfirmationComponent} from "../logout-confirmation/logout-confirmation.component";
import {CalendarEvent, CalendarModule, CalendarView, DateAdapter} from "angular-calendar";
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@Component({
  selector: 'app-direct-messages',
  styleUrls: ['./direct-messages.component.scss'],
  templateUrl: './direct-messages.component.html'
})
export class DirectMessagesComponent {

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
    this.router.navigateByUrl('/my-profile');
  }

  navigateToDirectMessages():void{
    this.router.navigateByUrl('/direct-messages');
  }

  openLogoutModal() {
    const modalRef = this.modalService.open(LogoutConfirmationComponent );
    modalRef.result.then((result) => {
      if (result) {
        this.authService.logOut();
      }
    }).catch(err => {
      console.error('Modal dismissed without logging out:', err);
    });
  }


}
