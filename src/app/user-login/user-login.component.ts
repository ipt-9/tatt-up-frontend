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
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
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



