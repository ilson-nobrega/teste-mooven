import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent } from './token/token.component';
import {RouterModule} from '@angular/router';
import {AdminRoutes} from './admin.routing';
import { HomeComponent } from './home/home.component';
import {GithubService} from '../@core/services/github.service';

@NgModule({
  declarations: [TokenComponent, HomeComponent],
  providers: [GithubService],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
