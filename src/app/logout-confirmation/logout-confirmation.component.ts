import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout-confirmation',
  templateUrl: './logout-confirmation.component.html'
})
export class LogoutConfirmationComponent {
  constructor(public activeModal: NgbActiveModal) {}

  dismiss() {
    this.activeModal.dismiss();
  }

  confirm() {
    this.activeModal.close(true);
  }
}
