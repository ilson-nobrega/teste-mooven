import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

// Crio uma classe para fazer a interceptação dos requests para poder passar o token gerado pelo github no oAuth e garantir nossa transação
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  // Chamo nosso AuthService para poder executar os métodos necessários
  constructor(public auth: AuthService) {
  }

  // Método herdado pela interface que implementamos, ficará responsável por colocar a mão na massa
  // Irá fazer um clone do request e adicionar o nosso token nele
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          Authorization: `token ${this.auth.getToken()}`
        }
      });
    }

    // Retorna o request interceptado
    return next.handle(request);
  }
}
