import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { KitchenComponent } from './kitchen/kitchen.component';
import { HallComponent } from './hall/hall.component';
import { DininghallComponent } from './dininghall/dininghall.component';
import { ToiletComponent } from './toilet/toilet.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { NavbarComponent } from './units/navbar/navbar.component';

import { FooterComponent } from './units/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,FooterComponent,HomeComponent,ContactComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3';
  username:string = 'Welcome'
  }

