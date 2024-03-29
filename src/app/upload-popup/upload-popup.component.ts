import { Component } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upload-popup',
  templateUrl: './upload-popup.component.html',
  styleUrls: ['./upload-popup.component.scss']
})
export class UploadPopupComponent {
  imageSrc: string | ArrayBuffer | null = null;
  showImageUpload: boolean = true;
  constructor(private modalService: NgbModal) {}

  openCreatePostPopup() {
    this.modalService.open(UploadPopupComponent);
  }
  closePopup() {
    this.modalService.dismissAll();
  }
  onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.imageSrc = reader.result;
        this.showImageUpload = false;
      };
      reader.readAsDataURL(file);
    }
  }
}
