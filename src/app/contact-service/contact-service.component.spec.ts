import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactServiceComponent } from './contact-service.component';

describe('ContactServiceComponent', () => {
  let component: ContactServiceComponent;
  let fixture: ComponentFixture<ContactServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactServiceComponent],
    });
    fixture = TestBed.createComponent(ContactServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
