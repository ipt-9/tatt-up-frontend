
import {Component, OnInit} from '@angular/core';
import {Observable, of, switchMap} from "rxjs";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../auth.service";
import {UploadPopupComponent} from "../upload-popup/upload-popup.component";
import {LogoutConfirmationComponent} from "../logout-confirmation/logout-confirmation.component";
import {SwipeableCalendarComponent} from "../swipeable-calendar/swipeable-calendar.component";
import { MessageService} from "../message.service";
import { Message } from 'src/app/models/message.model';
import {User} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
@Component({
  selector: 'app-direct-messages',
  styleUrls: ['./direct-messages.component.scss'],
  templateUrl: './direct-messages.component.html'
})
export class DirectMessagesComponent implements OnInit{
  messages$!: Observable<Message[]>;
  users$!: Observable<User[]>;
  showUserDropdown: boolean = false;
  filteredUsers$!: Observable<User[]>;
  searchTerm: string = '';
  isLoggedIn$!: Observable<boolean>;
  selectedUser!: User;
  newMessageContent : string = '';
  conversations$!: Observable<any[]>;
  constructor(
      private router: Router,
      private modalService: NgbModal,
      private authService : AuthService,
      private messageService : MessageService,
      private http: HttpClient,

  ) {}
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn();
    this.users$ = this.authService.getUsers();
    this.filteredUsers$ = this.users$;
    this.loadMessages();
    this.conversations$ = this.messageService.getConversations();
  }

  // New convo //
  startNewConversation() {
    console.log('Starting new conversation');
    this.showUserDropdown = !this.showUserDropdown;

  }

// Taken from ChatGPT //
  onSearchTermChange(): void {
    this.filteredUsers$ = this.users$.pipe(
      map(users => users.filter(user => user.username.toLowerCase().includes(this.searchTerm.toLowerCase())))
    );
  }

  selectUser(user: User): void {
    console.log('Selected user:', user);
    this.selectedUser = user;
    this.showUserDropdown = false;
    this.searchTerm = user.username;
    this.loadMessages();
  }

  loadMessages() {
    if(!this.selectedUser) return;
    this.messageService.getMessages(this.selectedUser.username).subscribe(
      messages => {
        console.log(messages);
        this.messages$ = of(messages);
      },
      error => console.error('Error fetching messages:', error)
    );
  }
  sendMessage(): void{
    if (!this.newMessageContent.trim()) return;
    const messageData = { receiver_username: this.selectedUser.username, message: this.newMessageContent };
    this.messageService.sendMessage(messageData).subscribe(
      response => {
        this.newMessageContent = '';
        this.loadMessages();
      },
      error => console.error('Error sending message:', error)
    );

  }


  // Basic functions //
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




