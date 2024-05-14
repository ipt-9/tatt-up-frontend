
import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../auth.service";
import {UploadPopupComponent} from "../upload-popup/upload-popup.component";
import {LogoutConfirmationComponent} from "../logout-confirmation/logout-confirmation.component";
import {SwipeableCalendarComponent} from "../swipeable-calendar/swipeable-calendar.component";
import { MessageService} from "../message.service";
import { Message } from 'src/app/models/message.model';
import {User} from "../models/user.model";
@Component({
  selector: 'app-direct-messages',
  styleUrls: ['./direct-messages.component.scss'],
  templateUrl: './direct-messages.component.html'
})
export class DirectMessagesComponent implements OnInit{
  messages$!: Observable<Message[]>;
  users$!: Observable<User[]>;
  currentMessage: Message | null = null;
  isLoggedIn$!: Observable<boolean>;
  selectedUserId!: number;
  constructor(
      private router: Router,
      private modalService: NgbModal,
      private authService : AuthService,
      private messageService : MessageService
  ) {}
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  this.loadMessages();
  }
  loadMessages() {
    this.messages$ = this.messageService.getMessages(1);  // Assuming '1' is the ID of the receiver or a session user ID
  }
  selectUser(user: User) {
    this.selectedUserId = user.id;
    // Now show the message input box to send a message to this selected user
  }

  selectMessage(message: Message) {
    this.currentMessage = message;
  }
  startNewConversation() {
    console.log('Starting new conversation');
    this.users$ = this.authService.getUsers();

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




