import {Component, OnInit} from '@angular/core';
import {GithubService} from '../../@core/services/github.service';
import {AuthService} from '../../@core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Variável que vai receber o usuário logado. Não vamos tipar, pra ganhar tempo.
  public user: any;

  // Dessa vez vamos tipar como any para ganharmos tempo, já foi explanado os tipos de resultados no outro componente
  public results: any;

  // Seto como nulo pra me ajudar a brincar com a view
  constructor(private githubService: GithubService, private authService: AuthService, private router: Router) {
    this.user = null;
    this.results = null;
  }

  // Método que é chamado quando o meu componente é inicializado
  ngOnInit(): void {
    this.searchProfile();
    this.searchProfileRepositories();
  }

  // Função que busca os repositórios do usuário logado
  searchProfileRepositories(): void {
    this.githubService.searchRepositoriesByUser()
      .subscribe((res) => {
        this.results = res;
      });
  }

  // Buscamos o usuário logado, para fazer um plus simples
  searchProfile(): void {
    this.githubService.getLoggedUser()
      .subscribe((res) => {
        this.user = res;
      });
  }

  // Método que desloga o usuário
  logout($event): void {
    $event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/public']);
  }
}
