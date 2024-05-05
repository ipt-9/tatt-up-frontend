
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-swipeable-calendar',
  templateUrl: './swipeable-calendar.component.html',

})
export class SwipeableCalendarComponent {
  eventForm: FormGroup;
  selectedDate: Date | null = null;
  events: { title: string, date: Date, time: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      title: [''],
      time: [''],
      date: [null]
    });
  }

  onDateChange(date: Date | null): void {
    this.selectedDate = date;
    this.eventForm.get('date')?.setValue(date ? date.toISOString().split('T')[0] : null);
  }

  saveEvent(): void {
    const eventData = this.eventForm.value;
    this.events.push({
      title: eventData.title,
      time: eventData.time,
      date: new Date(eventData.date)
    });
    console.log('Saved events:', this.events);
    this.eventForm.reset();
  }

}
