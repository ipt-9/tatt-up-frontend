import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    // Check if the form is invalid
    if (this.loginForm.invalid) {
      // If the form is invalid, display an alert message and return to prevent further execution
      alert('Please enter a valid email and password.');
      return;
    }

    // Retrieve email and password from the form
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    // Call the login method from the AuthService, passing the email and password
    this.authService.logIn({ email, password }).subscribe(
      (response) => {
        // If authentication is successful, navigate the user to the home page
        this.router.navigateByUrl('/');
      },
      (error) => {
        // If authentication fails, display the error message returned by the backend
        if (error && error.error && error.error.errors && error.error.errors.general) {
          alert(error.error.errors.general);
        } else {
          // For other errors, display a generic error message
          alert('An error occurred while logging in. Please try again later.');
        }
      }
    );
  }


}



