import {Component, OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  standalone: true,
  styleUrls: ['./user-signup.component.scss'],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
  ],
})
export class UserSignupComponent{
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      userType: ['', Validators.required]
    });
  }


  onSubmit() {
    const formData = this.signupForm.value;
    this.authService.signUp(formData).subscribe({
      next: response => {
        console.log(response); // Handle success response
      },
      error: error => {
        console.error(error); // Handle error response
      }
    });
  }

//openSignUp(){
    //this.modalService.open(UserSignupComponent);
//}
}
