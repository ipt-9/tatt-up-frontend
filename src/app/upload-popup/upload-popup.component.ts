import {Component, ElementRef, ViewChild} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-upload-popup',
  templateUrl: './upload-popup.component.html',
  styleUrls: ['./upload-popup.component.scss'],
})
export class UploadPopupComponent {
  imageUploaded: boolean = false;
  imageSrc: string | ArrayBuffer | null = null;
  selectFileClicked: boolean = false;

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  constructor(private modalService: NgbModal, private http : HttpClient, private authService: AuthService) {}

  openCreatePostPopup() {
    this.modalService.open(UploadPopupComponent);
  }
  closePopup() {
    this.modalService.dismissAll();
  }
  onFileSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = reader.result;
        this.imageUploaded = true;
      };
      reader.readAsDataURL(file);
    }
  }

  autoResize(event: any) {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  }

  publish() {
    const files = this.fileInput.nativeElement.files;
    if (!files.length) {
      console.error('No file selected.');
      return;
    }
    const file = files[0];
    const formData = new FormData();
    formData.append('image', file);

    this.http.post(`${this.authService.apiUrl}/imageUpload`, formData).subscribe({
      next: (response) => {
        console.log('Image uploaded successfully:', response);
        this.closePopup();
      },
      error: (error) => {
        console.error('Error uploading image:', error);
      }
    });
  }

}

