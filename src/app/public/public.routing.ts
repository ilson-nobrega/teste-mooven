import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {TokenComponent} from './token/token.component';

export const PublicRoutes: Routes = [
  {
      path: '',
      component: IndexComponent,
  }, {
    path: 'auth/:hash',
    component: TokenComponent
  }, {
    path: '**',
    redirectTo: '/404'
  }
];

