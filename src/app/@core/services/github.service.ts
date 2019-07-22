import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ReposityModel} from '../models/reposity.model';

// Importante falar sobre o @Injectable(), sem ele o serviço não pode ser injetado via Dependency Injection
@Injectable()
export class GithubService {

  // Setamos nossa URL de forma feia mesmo, vai servir pro nosso teste. É um bom padrão colocar a mesma nas configs de environment
  // Uma vez que elas podem mudar e facilita para editar no processo de build automática via Bamboo ou Jenkins
  protected urlGithub = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  // Método que consulta os repositórios públicos
  searchPublicRepositories(param: string): Observable<ReposityModel> {
    const term = new HttpParams()
      .append('q', param);
    return this.http.get<ReposityModel>(this.urlGithub + '/search/repositories', {params: term});
  }

  // Método responsável por buscar os repositórios do usuário logado
  // Mas Ilson, espera, você não vai passar o ID? Não, o token passado no interceptor já vai me identificar no GitHub
  searchRepositoriesByUser(): Observable<any> {
    return this.http.get(this.urlGithub + '/user/repos');
  }

}
