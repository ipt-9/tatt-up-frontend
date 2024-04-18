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
signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    const formData = this.signupForm.value;
    const email = formData.email;
    const password = formData.password;


    if (email === 'hello@gmail.com' && password === '12345') {
      this.router.navigateByUrl('');
    } else if (email === '' || password === '') {
      alert('Please enter your userdata')
    }
    else {
      alert('Incorrect email or password.');
      window.location.reload();
    }
  }
}
