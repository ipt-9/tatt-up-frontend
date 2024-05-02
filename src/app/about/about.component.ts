import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(
    private router: Router,
    private modalService: NgbModal,
  ) {}
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

  protected readonly open = open;
}
