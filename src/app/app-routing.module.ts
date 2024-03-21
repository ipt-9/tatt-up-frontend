import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent} from "./layout/layout.component";
import { FooterComponent} from "./footer/footer.component";
import { NavigationComponent} from "./navigation/navigation.component";
import { SearchBarComponent} from "./search-bar/search-bar.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {AboutComponent} from "./about/about.component";
import {ExploreComponent} from "./explore/explore.component";


const routes: Routes = [
  {path: 'layout', component: LayoutComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'search-bar', component:SearchBarComponent},
  {path: 'homepage', component:HomepageComponent},
  {path: 'about', component:AboutComponent},
  {path: 'explore', component:ExploreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
