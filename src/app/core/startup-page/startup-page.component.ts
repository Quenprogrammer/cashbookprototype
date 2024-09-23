import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-startup-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './startup-page.component.html',
  styleUrl: './startup-page.component.scss'
})
export class StartupPageComponent {

}
