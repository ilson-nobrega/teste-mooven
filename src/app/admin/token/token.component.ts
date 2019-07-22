import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  public token: string;

  ngOnInit(): void {
    this.token = this.route.snapshot.params.hash;
    this.setSessionToken();
    this.redirectToHome();
  }

  setSessionToken(): void {
    localStorage.setItem('user_token', this.token);
  }

  redirectToHome(): void {
    this.router.navigate(['/admin/home']);
  }
}
