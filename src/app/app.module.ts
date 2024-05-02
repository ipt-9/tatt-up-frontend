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
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { ContactServiceComponent } from './contact-service/contact-service.component';
=======
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgOptimizedImage} from "@angular/common";
>>>>>>> 968bbe213e41a707660779970d14d9ec677c4e1f
=======
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgOptimizedImage} from "@angular/common";

>>>>>>> b52d4d38df3d1d1bda69baa5ccbe7f65081e61d2


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
<<<<<<< HEAD
<<<<<<< HEAD
    ProfileSettingsComponent,
    ContactServiceComponent
=======
    UserProfilesComponent,
    ProfileSettingsComponent
>>>>>>> 968bbe213e41a707660779970d14d9ec677c4e1f
=======
    ProfileSettingsComponent,
    UserProfilesComponent,
    ProfileSettingsComponent

>>>>>>> b52d4d38df3d1d1bda69baa5ccbe7f65081e61d2
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
    FontAwesomeModule,
    NgOptimizedImage
  ],

  providers: [],
  bootstrap:
  [AppComponent],
})
export class AppModule { }
