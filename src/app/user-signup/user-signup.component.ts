import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class UserSignupComponent {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.snackBar.open('Please fill in all required fields', 'Close', {
        duration: 3000,
      });
      return;
    }

    const { username, email, password, confirmPassword, role } =
      this.signupForm.value;

    if (password !== confirmPassword) {
      this.snackBar.open('Passwords do not match', 'Close', { duration: 3000 });
      return;
    }

    this.authService
      .checkUsernameExists(username)
      .pipe(
        switchMap((usernameExists) => {
          if (usernameExists) {
            this.snackBar.open('Username already exists', 'Close', {
              duration: 3000,
            });
            return of(null); // Stop further execution if the username exists
          }
          return this.authService.checkEmailExists(email);
        }),
        switchMap((emailExists) => {
          console.log(emailExists); // This will log true or false based on the existence of the email
          if (emailExists) {
            this.snackBar.open('Email already exists', 'Close', {
              duration: 3000,
            });
            return of(null); // Stop further execution if the email exists
          }
          // Proceed with registration since both checks passed
          return this.authService.signUp({ username, email, password, role });
        }),
      )
      .subscribe(
        (response) => {
          if (response) {
            this.snackBar.open('User created successfully', 'Close', {
              duration: 3000,
            });
            this.router.navigateByUrl('/user-login');
          }
        },
        (error) => {
          this.snackBar.open('Failed to create user', 'Close', {
            duration: 3000,
          });
        },
      );
  }
}
