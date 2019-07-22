import {Component, OnInit} from '@angular/core';
import {GithubService} from '../../@core/services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Dessa vez vamos tipar como any para ganharmos tempo, já foi explanado os tipos de resultados no outro componente
  public results: any;

  // Seto como nulo os resultos pra me ajudar a brincar com a view
  constructor(private githubService: GithubService) {
    this.results = null;
  }

  // Método que é chamado quando o meu componente é inicializado
  ngOnInit(): void {
    this.searchProfileRepositories();
  }

  // Função que busca os repositórios do usuário logado
  searchProfileRepositories(): void {
    this.githubService.searchRepositoriesByUser()
      .subscribe((res) => {
        this.results = res;
      });
  }
}
