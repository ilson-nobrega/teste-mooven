import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

// Nossa classe para proteger nossas rotas privadas para acesso não autorizado
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  // Metódo padrão herdado da nossa classe implementada CanAnctivate, que basicamente nos diz se a pessoa tem permissão ou não
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {

    // Chamo nosso serviço pra ver se o usuário está autenticado
    // Lembrando que só fizemos dessa forma para amostragem
    if (this.auth.isAuthenticated()) {
      return true;
    }

    // Caso o usuário não tenha acesso, vamos mandar ele pra uma tela personalizada
    this.router.navigate(['/403']);
    return false;
  }
}
