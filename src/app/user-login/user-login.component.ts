import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar // inject MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.snackBar.open('Please enter a valid email and password.', 'Close', { duration: 3000 });
      return;
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.logIn({ email, password }).subscribe(
      (response) => {
        this.router.navigateByUrl('/');
      },
      (error) => {
        if (error && error.error && error.error.errors && error.error.errors.general) {
          this.snackBar.open('Wrong email or password. Please try again.', 'Close', { duration: 3000 });
        } else {
          this.loginError = 'An error occurred while logging in. Please try again later.';
          this.snackBar.open(this.loginError, 'Close', { duration: 3000 });
        }
      },
    );
  }
}
