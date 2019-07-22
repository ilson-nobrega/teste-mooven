import {Routes} from '@angular/router';
import {NotFoundComponent} from './@core/not-found/not-found.component';
import {ForbiddenComponent} from './@core/forbidden/forbidden.component';
import {AuthGuardService} from './@core/services/auth-guard.service';

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
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule),
    canActivate: [AuthGuardService]
  }, {
    path: '403',
    component: ForbiddenComponent
  }, {
    path: '404',
    component: NotFoundComponent
  }, {
    path: '**',
    redirectTo: '/404'
  }
];
