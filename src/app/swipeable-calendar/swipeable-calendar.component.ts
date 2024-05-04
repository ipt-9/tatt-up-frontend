import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-swipeable-calendar',
  templateUrl: './swipeable-calendar.component.html',

})
export class SwipeableCalendarComponent {
  selected: Date | null = null;

}
