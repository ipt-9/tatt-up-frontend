import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeableCalendarComponent } from './swipeable-calendar.component';

describe('SwipeableCalendarComponent', () => {
  let component: SwipeableCalendarComponent;
  let fixture: ComponentFixture<SwipeableCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwipeableCalendarComponent]
    });
    fixture = TestBed.createComponent(SwipeableCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
