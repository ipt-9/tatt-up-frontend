import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent} from "./layout/layout.component";
import { FooterComponent} from "./footer/footer.component";
import { NavigationComponent} from "./navigation/navigation.component";
import { SearchBarComponent} from "./search-bar/search-bar.component";

import {HeaderComponent} from "./header/header.component";
import {UserSignupComponent} from "./user-signup/user-signup.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {AboutComponent} from "./about/about.component";
import {ExploreComponent} from "./explore/explore.component";



const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'layout', component: LayoutComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'search-bar', component:SearchBarComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'user-signup', component:UserSignupComponent},
  {path: 'user-login', component:UserLoginComponent},
  {path: 'homepage', component:HomepageComponent},
  {path: 'about', component:AboutComponent},
  {path: 'explore', component:ExploreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
