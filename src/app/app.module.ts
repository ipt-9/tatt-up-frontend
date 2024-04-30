//app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {NavigationComponent} from "./navigation/navigation.component";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginComponent } from './user-login/user-login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadPopupComponent } from './upload-popup/upload-popup.component';
import { UploadContentComponent } from './upload-content/upload-content.component';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { LegalComponent } from './legal/legal.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavigationComponent,
    HeaderComponent,
    UserLoginComponent,
    UploadPopupComponent,
    UploadContentComponent,
    UserLoginComponent,
    HomepageComponent,
    AboutComponent,
    ExploreComponent,
    FavoritesComponent,
    CreatePostComponent,
    LegalComponent,
    ContactFormComponent,
    ChangePasswordComponent,
    ProfileSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchBarComponent,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    NgbModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],

  providers: [],
  bootstrap:
  [AppComponent],
})
export class AppModule { }
