import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';

export const routes: Routes = [
{
    path:'',component: HomeComponent
},
{
    path:'contact',component: ContactComponent
},{
    path:'about',component: AboutComponent
},
];
