import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';
import {Observable} from "rxjs";
import {AuthService} from "../auth.service";
import {LogoutConfirmationComponent} from "../logout-confirmation/logout-confirmation.component";
import {AsyncPipe, DatePipe, NgIf} from "@angular/common";
import {PostService} from "../post.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-layout',
  templateUrl: './open-post.component.html',
  styleUrls: ['./open-post.component.scss'],
  imports: [
    AsyncPipe,
    NgIf,
    DatePipe,
    FormsModule
  ],
  standalone: true
})
export class OpenPostComponent {
  isLoggedIn$!: Observable<boolean>;
  postId: number = 1;
  comments$!: Observable<any>;
  newCommentText: string = '';

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private authService : AuthService,
    private postService : PostService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn();
    this.route.params.subscribe(params => {
      this.postId = +params['id']; // The '+' is used to convert the parameter to a number
      if (!isNaN(this.postId)) {
        this.loadComments();
      } else {
        console.error('Invalid post ID');
      }
    });
  }
  loadComments() {
    this.comments$ = this.postService.getComments(this.postId);
  }

  addComment(commentText: string): void {
    if (!commentText.trim()) return;
    this.postService.addComment(this.postId, commentText).subscribe(() => {
      this.newCommentText = ''; // Clear the input after sending
      this.loadComments(); // Optionally reload comments to display the new one
    }, error => {
      console.error('Failed to add comment:', error);
    });
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

  navigateToUserProfiles():void{
    this.router.navigateByUrl('/user-profiles');
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

  sendComment(){

  }
}
