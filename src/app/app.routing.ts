import {Routes} from '@angular/router';
import {NotFoundComponent} from './@core/not-found/not-found.component';

// Aqui definimos as rotas, fazemos o carregamento dos módulos por LazyLoadingpara ganhar desempenho
export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  }, {
    path: 'public',
    loadChildren: () => import('./public/public.module').then(module => module.PublicModule)
  }, {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  }, {
    path: '404',
    component: NotFoundComponent
  }, {
    path: '**',
    redirectTo: '/404'
  }
];
