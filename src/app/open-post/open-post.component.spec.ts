import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPostComponent } from './open-post.component';

describe('OpenPostComponent', () => {
  let component: OpenPostComponent;
  let fixture: ComponentFixture<OpenPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenPostComponent]
    });
    fixture = TestBed.createComponent(OpenPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
