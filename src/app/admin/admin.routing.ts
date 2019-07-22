import {Routes} from '@angular/router';
import {TokenComponent} from '../public/token/token.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';

export const AdminRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: '**',
    redirectTo: '/404'
  }
];

