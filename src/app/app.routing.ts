import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  }, {
    path: '',
    loadChildren: './public/public.module#PublicModule'
  }
];
