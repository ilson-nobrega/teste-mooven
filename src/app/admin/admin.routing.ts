import {Routes} from '@angular/router';
import {TokenComponent} from './token/token.component';

export const AdminRoutes: Routes = [
  {
    path: 'auth/:hash',
    component: TokenComponent
  }, {
    path: '**',
    redirectTo: '/404'
  }
];

