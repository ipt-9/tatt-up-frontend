import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectMessagesComponent } from './direct-messages.component';

describe('DirectMessagesComponent', () => {
  let component: DirectMessagesComponent;
  let fixture: ComponentFixture<DirectMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectMessagesComponent]
    });
    fixture = TestBed.createComponent(DirectMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
