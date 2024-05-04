import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Observable} from "rxjs";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
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

  
}
