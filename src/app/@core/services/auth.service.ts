import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  public getToken(): string {
    return localStorage.getItem('user_token');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('user_token');
  }

  public logout(): void {
    localStorage.removeItem('user_token');
  }

}
