import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
forgotpasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.forgotpasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    const formData = this.forgotpasswordForm.value;
    const email = formData.email;
    const password = formData.password;


    if (email === true) {
      this.router.navigateByUrl('/change-password');
    } else {
      this.router.navigateByUrl('/change-password');
    }
  }
}
