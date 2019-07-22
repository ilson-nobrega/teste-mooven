import {Routes} from '@angular/router';
import {TokenComponent} from './token/token.component';
import {HomeComponent} from './home/home.component';

export const AdminRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'auth/:hash',
    component: TokenComponent
  }, {
    path: '**',
    redirectTo: '/404'
  }
];

