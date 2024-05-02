// app-routing.module.ts


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent} from "./layout/layout.component";
import { FooterComponent} from "./footer/footer.component";
import { NavigationComponent} from "./navigation/navigation.component";
import { SearchBarComponent} from "./search-bar/search-bar.component";
import {HeaderComponent} from "./header/header.component";
import {UserSignupComponent} from "./user-signup/user-signup.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {UploadPopupComponent} from "./upload-popup/upload-popup.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {AboutComponent} from "./about/about.component";
import {ExploreComponent} from "./explore/explore.component";
import {LegalComponent} from "./legal/legal.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {UserProfilesComponent} from "./user-profiles/user-profiles.component";

import {FavoritesComponent} from "./favorites/favorites.component";

import {ProfileSettingsComponent} from "./profile-settings/profile-settings.component";


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'layout', component: LayoutComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'search-bar', component:SearchBarComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'user-signup', component:UserSignupComponent},
  {path: 'user-login', component:UserLoginComponent},
  {path: 'upload-popup', component:UploadPopupComponent},
  {path: 'user-login', component:UserLoginComponent},
  {path: 'homepage', component:HomepageComponent},
  {path: 'about', component:AboutComponent},
  {path: 'favorites', component:FavoritesComponent},
  {path: 'explore', component:ExploreComponent},
  {path: 'legal', component:LegalComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'change-password', component:ChangePasswordComponent},
  {path: 'user-profile', component:UserProfilesComponent},
  {path: 'profile-settings', component:ProfileSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
