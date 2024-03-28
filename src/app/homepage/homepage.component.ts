import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(private router: Router) {}

  navigateToAbout(): void {
    this.router.navigateByUrl('/about');
  }

  navigateToExplore(): void {
    this.router.navigateByUrl('/explore');
  }
}
