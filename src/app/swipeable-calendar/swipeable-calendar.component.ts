import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../auth.service";
import { User } from 'src/app/models/user.model';
import { Event } from 'src/app/models/event.model';
@Component({
  selector: 'app-swipeable-calendar',
  templateUrl: './swipeable-calendar.component.html'
})
export class SwipeableCalendarComponent implements OnInit {
  eventForm: FormGroup;
  selectedDate: Date | null = null;
  events: Event[] = [];
  users: User[] = [];


  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      time: ['', Validators.required],
      date: [null, Validators.required],
      usernames: [''],  // Assuming an array of usernames
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.authService.getUsers().subscribe(users => {
      this.users = users;
    }, error => console.error('Error loading users', error));
  }

  onDateChange(date: Date | null): void {
    this.selectedDate = date;
    if (date) {
      this.eventForm.get('date')?.setValue(date.toISOString().split('T')[0]);
    }
  }

  saveEvent(): void {
    if (this.eventForm.valid) {
      const { title, time, date, usernames } = this.eventForm.value;
      const event: Event = {
        title,
        time,
        date: new Date(date).toISOString().split('T')[0],
        usernames
      };
      // This part was helped out by ChatGPT
      this.authService.saveEvent(event).subscribe(savedEvent => {
        this.events.push(savedEvent);
        console.log('Saved events:', this.events);
        this.eventForm.reset();
      }, error => console.error('Failed to save event', error));
    }}
}
