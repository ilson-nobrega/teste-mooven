import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PublicRoutes} from './public.routing';
import { IndexComponent } from './index/index.component';
import {TokenComponent} from './token/token.component';

@NgModule({
  declarations: [IndexComponent, TokenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PublicRoutes)
  ],
})
export class PublicModule {
}
