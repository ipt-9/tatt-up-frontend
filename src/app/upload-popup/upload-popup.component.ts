import { Component } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upload-popup',
  templateUrl: './upload-popup.component.html',
  styleUrls: ['./upload-popup.component.scss']
})
export class UploadPopupComponent {
  constructor(private modalService: NgbModal) {}

  openCreatePostPopup() {
    this.modalService.open(UploadPopupComponent);
  }

}
