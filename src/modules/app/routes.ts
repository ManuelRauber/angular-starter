import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home';
import {ProfileComponent} from './components/profile/profile';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];
