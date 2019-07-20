import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';

export const PublicRoutes: Routes = [
  {
    path: 'public',
    children: [{
      path: '',
      component: IndexComponent,
    }]
  }
];

