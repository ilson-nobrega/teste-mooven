import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent } from './token/token.component';
import {RouterModule} from '@angular/router';
import {AdminRoutes} from './admin.routing';
import { HomeComponent } from './home/home.component';
import {GithubService} from '../@core/services/github.service';
import { ProfileComponent } from './profile/profile.component';
import {MomentModule} from 'ngx-moment';

@NgModule({
  declarations: [TokenComponent, HomeComponent, ProfileComponent],
  providers: [GithubService],
  imports: [
    CommonModule,
    MomentModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
