import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.scss']
})
export class ForbiddenComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
  }

  signInWithGitHub($event): void {
    // Removemos o evento default do link href para que execute a instrução que desejamos
    $event.preventDefault();
    // Executo o redirecionamento pro seviço de autenticação criado em NodeJS nas functions do Firebase
    // Poderia ter sido construído com uma API diferente, onde a gente faria o request e a API retornasse o token
    // Mas prezamos pela simplicidade e também pela mostragem das camadas de desenvolvimento envolvendo o NodeJS
    this.document.location.href = 'https://us-central1-teste-mooven.cloudfunctions.net/login';
  }

}
