import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadContentComponent } from './upload-content.component';

describe('UploadContentComponent', () => {
  let component: UploadContentComponent;
  let fixture: ComponentFixture<UploadContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadContentComponent]
    });
    fixture = TestBed.createComponent(UploadContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
