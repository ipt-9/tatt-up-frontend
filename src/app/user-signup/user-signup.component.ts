//user-signup.component.ts

import {Component, OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn} from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      userType: ['', Validators.required]
    });
  }

  onSubmit() {
    const userData = this.signupForm.value;

    if(this.signupForm.invalid){
      alert('Please fill in all required fields');
    }

    if(userData.password !== userData.confirmPassword){
      alert('Passwords do not match');

    }

    this.authService.checkUsernameExists(userData.username).subscribe(
      (usernameExists) =>{
        if(usernameExists){
          alert('Username already exists');
        }
        }
         )

    this.authService.checkEmailExists(userData.email).subscribe(
      (emailExists) =>{
      if(emailExists){
        alert('Email already exists');
      } else{
        this.signUp(userData);
      }
    })


  }

  signUp(userData: any){
    this.authService.signUp(userData).subscribe(
      (response) => {
        alert('User created successfully');
      },
      (error)=>{
        alert('Failed to create user');
      }
    );
  }




}
