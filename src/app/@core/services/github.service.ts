import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class GithubService {

  protected urlGithub = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  searchPublicRepositories(param: string): Observable<any> {
    const term = new HttpParams()
      .append('q', param);
    return this.http.get(this.urlGithub + '/search/repositories', {params: term});
  }

}
