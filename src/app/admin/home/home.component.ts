import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {GithubService} from '../../@core/services/github.service';
import {ReposityModel} from '../../@core/models/reposity.model';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  // Nossa modelo que irá tipar o resultado vindo do github, ou seja, nosso resultado será do tipo RepositoryModel
  public results: ReposityModel;

  // Falamos que o campo que chamamos como #searchForm lá na view está sendo representado por essa variável abaixo
  @ViewChild('searchField', {static: false})
  public searchField: ElementRef;

  // Importamos o nosso serviço que fará a comunicação com o GitHub
  constructor(private githubService: GithubService) {
    this.results = null;
  }

  // Método responsável por executar uma ação após a renderização da view
  ngAfterViewInit(): void {
    // Chamados o método que fizemos para customizar a pesquisa da forma que precisamos
    this.doSeartchFromTextFieldEvent();
  }

  // Método responsável por fazer um filtro para pesquisar somente após 3 caracteres digitados, e que só consulte depois de 0,6 segundos
  // E que só execute a consulta se o a nova consulta for diferente da anterior
  private doSeartchFromTextFieldEvent(): void {
    fromEvent(this.searchField.nativeElement, 'keyup')
    // Um pipe para mapear os resultados capturados do evento retornando apenas o valor da consulta
      .pipe(map((event: any) => {
        return event.target.value;
      }))
      // Faço um filtro no evento, por meio de um pipe do RxJS, para poder executar a buscar somente após 3 caracteres digitados
      // Se não tiver 3 ou mais caracteres, a consulta não é realizada e a busca é resetada
      .pipe(filter(res => {
        if (res.length > 3) {
          return true;
        } else {
          this.results = null;
          return false;
        }
      }))
      // Setamos um tempo de 0,6 segundos para começar a pesquisar após digitado
      // Isso é para reduzir o número de requests desnecessários e economizar no meu plano do Firebase <3 ahahha
      .pipe(debounceTime(600))
      // Só executa a busca se houver mudanças no valor em relação a últuima consulta
      .pipe(distinctUntilChanged())
      // Aós esses passos, fazemos uma "inscrição" para poder chamar o método da consulta com o resultado do evento
      .subscribe((term: string) => {
        // Finalmente chamamos nossa consulta
        this.searchTerm(term);
      });
  }

  // Método que fará a consulta com os termos digitados no formulário
  // Note que estou pegando o valor em sring, na view já entrei dentro do $event.target
  searchTerm(value: string) {
    // Chamamos uma função criada dentro da nossa service que tem como função executar a consulta na nossa API
    this.githubService.searchPublicRepositories(value)
      // Fazemos literalmente uma inscrição para recebermos o resultado quando o mesmo estiver pronto
      .subscribe((res: ReposityModel) => {
        // Atribuimos o resultado a nossa vairável tipada com a nossa model
        this.results = res;
      });
  }

}
