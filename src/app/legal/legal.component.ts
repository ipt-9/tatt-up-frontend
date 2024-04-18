import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent {
  constructor(private router: Router) {}

  navigateToSignUp(): void {
    this.router.navigateByUrl('/user-signup');
  }

  navigateToLogin(): void {
    this.router.navigateByUrl('/user-login');
  }
}
